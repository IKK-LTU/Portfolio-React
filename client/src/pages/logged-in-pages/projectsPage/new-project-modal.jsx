import React, { useState } from "react";
import {
  Button,
  Box,
  Modal,
  Typography
} from "@mui/material";
import ProjectForm from './project-form';
// import ProjectsService from '../../../services/projects-service';
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
  overflowY:'scroll',
  p: 4,
};
const NewProjectModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 

  return (
    <>
      <Button
        fullWidth
        onClick={handleOpen}
        color='secondary'
        sx={{ p: 5, background: "#efefef", boxShadow: 4, border: 1, mb: 4 }}>
        Add new Projects
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <Typography
            sx={{ pb: 4 }}
            id='modal-modal-title'
            textAlign='center'
            variant='h6'
            component='h2'>
            Create project
          </Typography>
          <ProjectForm/>
        </Box>
      </Modal>
    </>
  );
};

export default NewProjectModal;
