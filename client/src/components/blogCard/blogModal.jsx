import React from "react";
import { Box, Typography, Modal } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const StyleModalBox = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: "50%",
  left: "50%",
  width: "90%",
  height: "85%",
  transform: "translate(-50%, -50%)",
  background: "#fff",
  color: "black",
  boxShadow: 24,
  padding: "1rem",
  // outline: "none",
  maxHeight: "100%",
  scrollbarWidth: " none",
  overflowY: "auto",
  borderRadius: "5px",
  borderTop: "20px solid black",
  borderBottom: "35px solid black",
  borderRight: "15px solid black",
  borderLeft: "15px solid black",
  outline: "1px solid #FF7D7D",
  "::-webkit-scrollbar": {
    width: "10px",
  },
  "::-webkit-scrollbar-track": {
    boxShadow: "nset 0 0 6px grey",
    borderRadius: "2px",
  },
  "::-webkit-scrollbar-thumb": {
    background: "#79815E",
    borderRadius: "2px",
    transition: "0.3s ease-in-out",
  },
  "::-webkit-scrollbar-thumb:hover": {
    background: "#6a7052",
  },
  fontSize: "15px",
  [theme.breakpoints.up("sm")]: { padding: "2rem" },
  [theme.breakpoints.up("md")]: { width: "80%", padding: "3rem" },
  [theme.breakpoints.up("lg")]: { width: "70%" },
  [theme.breakpoints.up("xl")]: { width: "60%" },
}));

const BlogModal = (props) => {
  return (
    <Modal open={props.open} onClose={props.Closing}>
      <>
          <CloseOutlinedIcon
            onClick={props.Closing}
            fontSizeInherit
            sx={{
              cursor: "pointer",
              position: 'absolute',
              top:'1rem',right:'1rem',
              color: "white",
              transition: "0.5s",
              fontSize: "1.5em",
              ":hover": {
                color: "#FF7D7D",
                transform:'rotateZ(180deg)',
              },
            }}
          />
        <StyleModalBox>
          <Typography
            id='modal-modal-title'
            variant='h6'
            component='h2'
            sx={{ textAlign: "center", pb: 2 }}>
            {props.blogTitle}
          </Typography>
          <Typography id='modal-modal-description' sx={{ fontSize: "0.8em" }}>
            {props.blogText}
          </Typography>
        </StyleModalBox>
      </>
    </Modal>
  );
};

export default BlogModal;
