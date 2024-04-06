import { Box } from "@mui/system";
import Nums from "./Nums";

const NavItem = ({ name, icon, num }) => {
  const borderBottom = name === "Issues" ? "3px solid orange" : "";
  const fontWeight = name === "Issues" ? "bold" : "normal";
  const minWidth = name === "Pull request" ? "80px" : "0px";
  return (
    <Box
      gap={0.7}
      sx={{
        height: "50px",
        fontSize: "14px",
        display: name === "Insights" ? { lg: "flex", xs: "none" } : "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px 10px",
        borderBottom,
        fontWeight,
        color: "#4d4c4c",
      }}
    >
      {icon} <Box sx={{ minWidth }}>{name}</Box> {num && <Nums num={num} />}
    </Box>
  );
};

export default NavItem;
