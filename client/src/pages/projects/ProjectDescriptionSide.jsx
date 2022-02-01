import React from 'react';
import { Box, Typography } from "@mui/material";
import ReadMore from '../../components/readMore/readMore'
import LinkToProject from './LinkToProject'
const ProjectDescriptionSide = () => {
  return (
    <Box
      component='article'
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "45%",
        color: "#fff",
      }}>
      <Typography varian='h2' component='h2' sx={{ color: "#FF7D7D",fontSize:'1.2rem', textAlign: "center" }}>
        New feature - Contact Form
      </Typography>
      <ReadMore
        text='
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        error facilis dolores ipsam at sequi commodi ad, voluptatibus porro
        perspiciatis et iste voluptate ipsum rem accusamus quos, nulla
        voluptates animi ratione? Vel magni alias molestiae eligendi explicabo
        labore porro facilis sed blanditiis. Nesciunt, sit cum enim consequuntur
        excepturi obcaecati suscipit quod! Officia, numquam placeat quasi
        tenetur nulla ducimus, nesciunt possimus cupiditate, quae odio facere
        natus optio voluptate unde sapiente magni ab modi molestias dolorum nisi
        tempore? Nobis iste repudiandae a quod unde doloribus quis commodi in
        officiis quos hic mollitia, ipsam quam, eius consequuntur recusandae
        atque quisquam facilis. Neque, distinctio? tenetur nulla ducimus, nesciunt possimus cupiditate, quae odio facere
        natus optio voluptate unde sapiente magni ab modi molestias dolorum nisi
        tempore? Nobis iste repudiandae a quod unde doloribus quis commodi in
        officiis quos hic mollitia, ipsam quam, eius consequuntur recusandae
        atque quisquam facilis. Neque, distinctio?
     '
      />
      <LinkToProject linkTo='./' />
    </Box>
  );
};
export default ProjectDescriptionSide;
