import { Box, Container, Typography } from "@mui/material";
import { footerTitles } from "../../utils/constants";
import { GitHub } from "@mui/icons-material";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
const Footer = () => {
  return (
    <>
      <Container
        sx={{
          display: { md: "flex", xs: "none" },
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
          borderBottom: "1px solid gray",
          width: { sm: "95vw !important", xs: "94vw !important" },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <LightbulbOutlinedIcon sx={{ fontSize: "20px" }} />
          <Typography>
            <strong>Protip!</strong>
          </Typography>
          <Typography>What's not been updated in a month:</Typography>
          <Typography className="footer_links">
            updated&lt;2024-04-06.
          </Typography>
        </Box>
      </Container>
      <Container
        sx={{
          display: { md: "flex", xs: "none" },
          gap: "2rem",
          justifyContent: "space-between",
          alignItems: "center",
          padding:"2rem"
        }}
      >
        <Box sx={{ display: "flex", gap: "3rem" }}>
          {footerTitles[0].map((title, index) => {
            return (
              <span className="footer_links" key={`title-${index}`}>
                {title}
              </span>
            );
          })}
        </Box>
        <Box>
          <GitHub />
        </Box>
        <Box sx={{ display: "flex", gap: "3rem" }}>
          {footerTitles[1].map((title, index) => {
            return (
              <span className="footer_links" key={`title-${index}`}>
                {title}
              </span>
            );
          })}
        </Box>
      </Container>
    </>
  );
};

export default Footer;
