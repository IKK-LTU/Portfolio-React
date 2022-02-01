import React from 'react';
import { Box} from "@mui/material";


const ImageBox = () => {
    return (
      <Box sx={{ width: "45%" }}>
        <img
          style={{
            borderRadius: "10px",
            border: "1px black solid",
            width: "100%",
          }}
          alt='project img'
          src={require("../../assets/projectsImages/darzelis/MainWithForm.png")}
        />
      </Box>
    );
};

export default ImageBox;
