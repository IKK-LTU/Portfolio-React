import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/auth";
import { Typography, Button, Box, Toolbar, Popover } from "@mui/material";
import { styled } from "@mui/material/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PermIdentityTwoToneIcon from "@mui/icons-material/PermIdentityTwoTone";
import MeetingRoomTwoToneIcon from "@mui/icons-material/MeetingRoomTwoTone";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const StyledPopperBox = styled(Popover)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    "&:button": {
      color: "black",
    },
    " &	.MuiPaper-root": {
      borderRadius: "2px",
      background: "white",
      padding: "0.5rem",
    },
  }));
  return (
    <Box>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          background: "#79815E",
          color: "#2D1C36",
        }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 5,
          }}>
          {" "}
          <Typography variant='h6' component='div' sx={{ cursor: "pointer" }}>
            Profile
          </Typography>
          <Typography variant='h6' component='div' sx={{ cursor: "pointer" }}>
            Projects
          </Typography>
          <Typography variant='h6' component='div' sx={{ cursor: "pointer" }}>
            Blogs
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
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
            }}>
            <Button
              sx={{
                display: "flex",
                cursor: "pointer",
                width: "100%",
                borderRadius: 0,
                borderBottom: 1,
                color: "black",
              }}
              disableRipple>
              <PermIdentityTwoToneIcon sx={{ mr: 3 }} />
              Profile
            </Button>
            <Button
              sx={{
                display: "flex",
                cursor: "pointer",
                width: "100%",
                borderRadius: 0,
                color: "black",
              }}
              onClick={() => dispatch(logout())}
              disableRipple>
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
