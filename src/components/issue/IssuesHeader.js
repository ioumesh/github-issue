import { Box, Stack } from "@mui/system";
import ModeStandbyIcon from "@mui/icons-material/ModeStandby";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import { filters } from "../../utils/constants";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

const IssuesHeader = () => {
  return (
    <Stack
      direction="row"
      gap={2}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#f6f8fa",
        width: "100%",
        height: "50px",
        borderRadius: "6px 6px 0px 0px",
        fontSize: "12px",
        overflow: "hidden",
      }}
    >
      <Box className="box-center issue-header" gap={2}>
        <Box
          className="box-center"
          sx={{ fontWeight: "bold", ml: "20px", color: "#4d4c4c" }}
        >
          <ModeStandbyIcon></ModeStandbyIcon> &nbsp;625 Open
        </Box>
        <Box className="box-center" sx={{ fontWeight: "500", color: "gray" }}>
          <DoneRoundedIcon></DoneRoundedIcon> 10,104 Closed
        </Box>
      </Box>
      <Box
        className="box-center"
        gap={3}
        sx={{ fontWeight: "500", color: "gray", m: "0 20px" }}
      >
        {filters.map((filter) => {
          return (
            <Box gap={0.1} className="box-center" key={filter.name}>
              {filter.name} <ArrowDropDownRoundedIcon />
            </Box>
          );
        })}
      </Box>
    </Stack>
  );
};

export default IssuesHeader;
