import { Stack, Box } from "@mui/system";
import ModeStandbyIcon from "@mui/icons-material/ModeStandby";
import Label from "./Label";
import Comment from "./Comment";
import moment from "moment/moment";
import Avatar from "./Avatar";

const Issue = ({
  issue: {
    number,
    labels,
    title,
    comments,
    created_at,
    user: { login, avatar_url },
  },
  innerRef,
}) => {
  const time = moment(created_at).fromNow();
  const avatarPosiiton=comments>0?12:15
  return (
    <Stack
      direction="row"
      gap={2}
      className="issue-cont"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxHeigt: "50px",
        border: "1px solid #d0cece",
        borderLeft: "none",
        borderRight: "none",
        padding: "10px",
        fontSize: { sm: "1rem", xs: ".8rem" },
      }}
    >
      <Stack direction="row" gap={2}>
        <ModeStandbyIcon sx={{ color: "green" }} />
        <Stack>
          <Box
            sx={{
              lineHeight: "25px",
              fontSize: "16px",
              fontWeight: "bold",
              marginBottom: "4px",
            }}
          >
            <span className="issue-title">{title}</span>
            {labels.map((label) => {
              return <Label key={label.id} label={label} />;
            })}
          </Box>
          <span ref={innerRef}>
            #{number} opened {time} by {login}
          </span>
        </Stack>
      </Stack>
      <Stack direction="row" alignItems="center" gap={{ md:avatarPosiiton, xs: 2 }}>
        <Box>{<Avatar avatar={avatar_url} />}</Box>
        <Box>{comments>0 &&<Comment comments={comments} />}</Box>
      </Stack>
    </Stack>
  );
};

export default Issue;
