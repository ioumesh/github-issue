import { Container } from "@mui/material";
import Issue from "./Issue";
import IssuesHeader from "./IssuesHeader";
import { useEffect, useState, useRef, useCallback } from "react";
import { fetchFromAPI } from "../../utils/fetchFromAPI";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";

const IssuesContainer = () => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const observer = useRef();
  let query = `?per_page=30&page=${page}`;

  useEffect(() => {
    fetchFromAPI(query).then((res) => {
      if (!issues.length) {
        setIssues(res);
      } else {
        setIssues((prevIssues) => {
          return [...prevIssues, ...res];
        });
      }
      setHasMore(res.length > 0);
      setLoading(false);
    });
  }, [page]);

  const lastIssue = useCallback(
    (node) => {
      // If we're currently loading data, do nothing
      if (loading) return;

      // If there's an existing observer, disconnect it
      if (observer.current) observer.current.disconnect();

      // Create a new IntersectionObserver
      observer.current = new IntersectionObserver((entries) => {
        // If the observed element intersects the viewport and there's more data to load
        if (entries[0].isIntersecting && hasMore) {
          // Increment the page number and set loading to true
          setPage((prevPage) => prevPage + 1);
          setLoading(true);
        }
      });

      // If a node is provided, start observing it
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <>
      <Container
        maxWidth="xxl"
        sx={{
          border: "1px solid #d0cece",
          marginTop: { sm: "40px", xs: "20px" },
          borderRadius: "6px",
          paddingLeft: "0 !important",
          paddingRight: "0 !important",
          width: { sm: "82vw !important", xs: "94vw !important" },
          overflow: "auto",
        }}
      >
        <IssuesHeader />
        {issues.map((issue, index) => {
          if (issues.length === index + 1) {
            return (
              <Issue innerRef={lastIssue} key={issue.number} issue={issue} />
            );
          } else {
            return <Issue key={issue.number} issue={issue} />;
          }
        })}
      </Container>
      <Box
        className="box-center"
        style={{ zIndex: "1000", marginLeft: "auto", marginRight: "auto" }}
      >
        {loading && <CircularProgress sx={{ marginTop: "40px" }} />}
      </Box>
    </>
  );
};

export default IssuesContainer;
