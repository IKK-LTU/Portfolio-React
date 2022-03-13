import { React, useState } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import BlogModal from "./blogModal";


const StyledBlogCard = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "50%",
  overflow: "hidden",
  border: "1px solid #C5C5C5",
  borderRadius: "2px",
  padding: "2rem",
  fontSize: "15px",
  
  transition:'.5s',
  boxShadow: [theme.shadows[14]],
  "&:hover": {
    boxShadow: [theme.shadows[5]],
  },
  [theme.breakpoints.up("sm")]: { width: "50%", height: "50%", margin: "auto" },
  [theme.breakpoints.up("md")]: {
    width: "45%",
    height: "100%",
    margin: "auto 0",
  },
  [theme.breakpoints.up("lg")]: {
    width: "25%",
    height: "100%",
    margin: "auto 0",
  },
  [theme.breakpoints.up("xl")]: {},
}));

const BlogCard = (props) => {
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const [open, setOpen] = useState(false);

  return (
    <StyledBlogCard variant='article'>
      <Typography
        onClick={handleOpen}
        sx={{
          fontSize: "1.5em",
          fontWeight: "bold",
          textAlign: "center",
          cursor: "pointer",
        }}
        varian='h2'>
        {props.blogTitle}
      </Typography>
      <Typography sx={{ fontSize: "0.7em", textAlign: "center" }} varian='h6'>
        {props.blogDate} | {props.blogAuthor}
      </Typography>
      <Typography
        onClick={handleOpen}
        style={{
          display: "-webkit-box",
          "WebkitBoxOrient": "vertical",
          "WebkitLineClamp": "10",
        }}
        sx={{
          overflow: "hidden",
          my: 2,
          fontSize: "0.9em",
          cursor: "pointer",
        }}
        varian='p'>
        {props.blogText}
      </Typography>
      <Typography
        onClick={handleOpen}
        sx={{
          color: "#79815E",
          cursor: "pointer",
          fontWeight: "bold",
          transition: "0.5s",
          ":hover": {
            color: "#414828",
          },
        }}
        varian='p'>
        Read more &gt;
      </Typography>
      <BlogModal
        blogText={props.blogText}
        blogTitle={props.blogTitle}
        open={open}
        Closing={handleClose}
      />
    </StyledBlogCard>
  );
};

export default BlogCard;
