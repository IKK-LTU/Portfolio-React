import React from 'react';
import { Box} from "@mui/material";

import { styled } from "@mui/material/styles";

const ProjectDescriptionSide = ({ children}) => {
  
const StyledProjectDescriptionBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "45%",
  color: "#fff",
  [theme.breakpoints.down("xl")]: {
  },
  [theme.breakpoints.down("lg")]: {
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
  },
}));

  return (
    <StyledProjectDescriptionBox component='article'>
      {children}
    </StyledProjectDescriptionBox>
  );
};
export default ProjectDescriptionSide;
