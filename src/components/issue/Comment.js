import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { Box } from "@mui/material";
const Comment = ({ comments }) => {
  return (
    <Box className="box-center" sx={{ fontSize: "14px", marginTop: "-15px" }}>
      <ChatBubbleOutlineOutlinedIcon style={{ fontSize: "14px" }} />
      &nbsp;
      {comments}
    </Box>
  );
};

export default Comment;
