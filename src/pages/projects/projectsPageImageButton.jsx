import React from "react";
import { Box } from "@mui/material";
import ProjectsData from "./projectsData";

function projectsPageImageButton() {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%%",
      }}>
      <img
        style={{
          objectFit: "cover",
          objectPosition:"50%",
          width: "100%",
          height: "100%",
        }}
        src={ProjectsData[0].img}
        alt='nera'
      />
    </Box>
  );
}

export default projectsPageImageButton;
