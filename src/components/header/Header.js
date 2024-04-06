import React from "react";
import { Container, Stack, Box } from "@mui/system";
import { Typography } from "@mui/material";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import HeaderData from "./HeaderData";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ForkLeftIcon from "@mui/icons-material/ForkLeft";

import { navs } from "../../utils/constants";
import NavItem from "./NavItems";

const Header = () => {
  return (
    <Container
      maxWidth="100vw"
      sx={{
        background: "#f6f8fa",
        padding: "0px",
        color: "gray",
        borderBottom: "1px solid lightgray",
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        sx={{
          height: "10vh",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "14px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "235px",
            marginLeft: {
              xs: "30px",
              sm: "30px !important",
              md: "0px !important",
            },
          }}
        >
          <CollectionsBookmarkIcon sx={{ fontSize: "20px" }} />
          <Typography
            variant="h6"
            className="heading_link"
            sx={{ color: "#0969da", cursor: "pointer" }}
          >
            facebook
          </Typography>
          /
          <Typography
            variant="h6"
            className="heading_link"
            sx={{ color: "#0969da", cursor: "pointer" }}
          >
            <strong>react</strong>
          </Typography>
          <div
            className="box-center"
            style={{
              border: "1px solid #d0cece",
              borderRadius: "20px",
              width: "50px",
            }}
          >
            Public
          </div>
        </Box>
        <Box
          sx={{
            display: { md: "flex", xs: "none" },
            justifyContent: "center",
            alignItems: "center",
            fontSize: "14px",
            color: "black",
            cursor: "pointer",
          }}
          gap={2}
        >
          <HeaderData
            icon={<NotificationsNoneIcon sx={{ fontSize: "20px" }} />}
            text={"Notifications"}
          />
          <HeaderData
            icon={<StarBorderIcon sx={{ fontSize: "20px" }} />}
            text={"Star"}
            nums={"175K"}
          />
          <HeaderData
            icon={<ForkLeftIcon sx={{ fontSize: "20px" }} />}
            text={"Fork"}
            nums={"35.3K"}
          />
        </Box>
      </Stack>
      <Stack
        direction="row"
        gap={2}
        sx={{
          margin: "0px 0px 0px 20px",
          overflow: "auto",
        }}
      >
        {navs.map((nav) => {
          return (
            <NavItem
              key={nav.name}
              name={nav.name}
              icon={nav.icon}
              num={nav.num}
            />
          );
        })}
      </Stack>
    </Container>
  );
};

export default Header;
