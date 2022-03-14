import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../store/auth";
import {
  Button,
  Box,
  Toolbar,
  Popover,
  Typography,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PermIdentityTwoToneIcon from "@mui/icons-material/PermIdentityTwoTone";
import MeetingRoomTwoToneIcon from "@mui/icons-material/MeetingRoomTwoTone";
import NavBarLink from "./navbar-link";
import routes from "../../../routing/routes";
import { selectAuth } from "../../../store/auth";


const StyledPopperBox = styled(Popover)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  " &	.MuiPaper-root": {
    borderRadius: "2px",
    background: "white",
    padding: "0.5rem",
  },

  "& .MuiButton-root": {
    display: "flex",
    borderRadius: 0,
    color: "black",
    "&:hover": {
      borderLeft: "1px solid black",
    },
  },
}));

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { user } = useSelector(selectAuth);
  const dispatch = useDispatch();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box sx={{ position: "fixed", width: "100%", zIndex: "2" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          background: "#79815E",
          color: "#2D1C36",
          height: "50px",
          boxShadow: 2,
          px: 4,
        }}>
        <Box
          sx={{
            display: "flex",
            gap: 5,
            height: "100%",
          }}>
          <NavBarLink path={routes.ProfilePage} title='Profile' />
          <NavBarLink path={routes.ProjectsManagerPage} title='Projects' />
          <NavBarLink path={routes.BlogsManagerPage} title='Blogs' />
          <NavBarLink path={routes.UsersManagerPage} title='Users' />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography>{`${user.name} ${user.surname}`}</Typography>
          <Divider
            orientation='vertical'
            light
            flexItem
            sx={{
              borderColor: "common.white",
              my: 2,
              ml: 2,
            }}
            variant='middle'
          />
          <AccountCircleIcon
            id='basic-button'
            onClick={handleClick}
            sx={{
              color: "white",
              cursor: "pointer",
              height: "30px",
              width: "30px",
              "&:hover": {
                color: "#ffd7d7",
              },
            }}
          />
          <StyledPopperBox
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}>
            <Button disableRipple>
              <PermIdentityTwoToneIcon sx={{ mr: 3 }} />
              Profile
            </Button>
            <Button onClick={() => dispatch(logout())} disableRipple>
              <MeetingRoomTwoToneIcon sx={{ mr: 3 }} />
              Logout
            </Button>
          </StyledPopperBox>
        </Box>
      </Toolbar>
    </Box>
  );
};
export default Navbar;
