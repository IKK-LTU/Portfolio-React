import React from "react";
import { Box, Typography, Link } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ImageBox from './ImageBox'

const projectContainer = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "60%",
        padding: "0 20%",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        backgroundColor: `${props.color}`,
      }}>
      <Typography
        varian='p'
        sx={{ textAlign: "right", color: "#9A9A9A", width: "100%" }}>
        2021-01-30
      </Typography>
      <Box
        sx={{
          display: "flex",
          height: "80%",
          width: "100%",
          justifyContent: "space-between",
        }}>
        <ImageBox/>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "45%",
            color: "#fff",
          }}>
          <Typography
            varian='h1'
            sx={{ color: "#FF7D7D", textAlign: "center" }}>
            New feature - Contact Form
          </Typography>
          <Typography varian='p'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            error facilis dolores ipsam at sequi commodi ad, voluptatibus porro
            perspiciatis et iste voluptate ipsum rem accusamus quos, nulla
            voluptates animi ratione? Vel magni alias molestiae eligendi
            explicabo labore porro facilis sed blanditiis. Nesciunt, sit cum
            enim consequuntur excepturi obcaecati suscipit quod! Officia,
            numquam placeat quasi tenetur nulla ducimus, nesciunt possimus
            cupiditate, quae odio facere natus optio voluptate unde sapiente
            magni ab modi molestias dolorum nisi tempore? Nobis iste repudiandae
            a quod unde doloribus quis commodi in officiis quos hic mollitia,
            ipsam quam, eius consequuntur recusandae atque quisquam facilis.
            Neque, distinctio?
          </Typography>
          <Link
            href='#'
            underline='hover'
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}>
            <ArrowForwardIcon
              sx={{
                backgroundColor: "white",
                borderRadius: "3px",
                mx: 2,
              }}
            />
            <Typography varian='p'>Project Link</Typography>
          </Link>
        </Box>
      </Box>
      
    </Box>
  );
};

export default projectContainer;
