import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
const ReadMoreFeature = (props) => {
  const visibleText = props.text.substring(0, 490);
  const invisibleText = props.text.substring(500);
  const [readMore, setReadMore] = useState(false);
  const Show = () => {
    setReadMore(!readMore);
  };
  console.log(invisibleText === "");
  const ScrollBox = styled(Box)(({ theme }) => ({
    maxHeight: "80%",
    scrollbarWidth: " none",
    overflowY: "auto",
    color: "#939393",
    "::-webkit-scrollbar": {
      width: "15px",
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
  }));
  const TypographyButton = styled(Typography)(({ theme }) => ({
    color: "black",
    cursor: "pointer",
    transition: "0.3s ease-in-out",
    textDecoration: "none",
    textAlign: "center",
    fontWeight: "bold",
    ":hover": {
      color: "#79815E",
      textDecoration: "underline",
    },
  }));

  return (
    <ScrollBox>
      <Typography>
        {visibleText}
        {invisibleText === "" ? null : " ..."}
      </Typography>
      {invisibleText === "" ? null : readMore ? (
        <>
          <Typography>{invisibleText}</Typography>
          <TypographyButton onClick={Show}>Less</TypographyButton>
        </>
      ) : (
        <TypographyButton onClick={Show}>More</TypographyButton>
      )}
    </ScrollBox>
  );
};

export default ReadMoreFeature;
