import React, { useState } from "react";
import { Container, Button, Box, Modal, Typography } from "@mui/material";
const fakeProjects = [
  {
    id: "1",
    date: "2021-12-10",
    title: "React Form",
    description: "nnanananna",
    "last-editor": null,
    technologies: [""],
    images: [
      "../pictures/Darzelis-1mp4",
      "../pictures/Darzelis-1mp4",
      "../pictures/Darzelis-1mp4",
    ],
  },
];
const style = {
  position: "absolute",
  width: "90%",
  height: "90%",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  borderRadius: 1,
  boxShadow: 24,
  p: 4,
};
const ProjectsManagement = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Container sx={{ height: "100%", width: "100%", paddingTop: "100px" }}>
      <Button
        fullWidth
        onClick={handleOpen}
        color='secondary'
        sx={{ p: 5, background: "#efefef", boxShadow: 4, border: 1 }}>
        Add new Projects
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <Typography
            id='modal-modal-title'
            textAlign='center'
            variant='h6'
            component='h2'>
            Create project
          </Typography>
          <Box>
            <Typography>Upload Images or gifs</Typography>
            
          </Box>
        </Box>
      </Modal>
    </Container>
  );
};

export default ProjectsManagement;
