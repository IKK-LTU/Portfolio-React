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
    [theme.breakpoints.down("xl")]: {
    },
    [theme.breakpoints.down("lg")]: {
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "2rem auto",
    },
   }));
  
  const TypographyButton = styled(Typography)(({ theme }) => ({
    display: "inline",
    color: "#f59390",
    cursor: "pointer",
    transition: "0.3s ease-in-out",
    textDecoration: "none",
    textAlign: "center",
    letterSpacing: "2px",
    width: "30px",
    ":hover": {
      color: "#79815E",
      textDecoration: "underline",
    },
  }));

  return (
    <ScrollBox>
      <Typography component={"span"}>
        {visibleText}
        {invisibleText === "" ? null : "... "}
        {invisibleText === "" ? null : readMore ? (
          <>
            <Typography component={"span"}>
              {invisibleText}{" "}
              <TypographyButton onClick={Show}>Less</TypographyButton>
            </Typography>
          </>
        ) : (
          <TypographyButton onClick={Show}>Read more</TypographyButton>
        )}
      </Typography>
    </ScrollBox>
  );
};

export default ReadMoreFeature;
