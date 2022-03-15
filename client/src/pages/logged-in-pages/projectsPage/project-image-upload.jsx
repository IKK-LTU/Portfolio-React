import React, { useRef, useEffect } from "react";
import { Box, styled, Fab } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import ProjectsService from "../../../services/projects-service";

const ImgContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "block",
  height: "50vh",
  width: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: "2rem",
}));

const Img = styled("img")({
  width: "100%",
  height: "100%",
  outline: "2px solid #79815E",
  objectFit: "cover",
  objectPosition: "cover",
});

const calcOffset = (image, imgIcon) => {
  const imageDimension = imgIcon.offsetWidth;
  return  (1 - 1 / 2 ** (1 / 2)) - imageDimension / 2.3;
};

const ProjectImageUpload = (props) => {
  const imageRef = useRef(null);
  const imgIconRef = useRef(null);
  const imgUploadRef = useRef(null);

  const handleUploadImgClick = () => {
    const imgUpload = imgUploadRef.current;
    imgUpload.click();
  };

  const handleUploadImgLoaded = async () => {
    const imgUpload = imgUploadRef.current;
    const [img] = imgUpload.files;
    await ProjectsService.uploadImage(img);
  };

  useEffect(() => {
    const adjustImgIconOffset = () => {
      const offset = calcOffset(imageRef.current, imgIconRef.current);
      const imgIcon = imgIconRef.current;

      imgIcon.style.bottom = `${offset}px`;
      imgIcon.style.right = `${offset}px`;
    };
    adjustImgIconOffset();

    window.addEventListener("resize", adjustImgIconOffset);

    return () => {
      window.removeEventListener("resize", adjustImgIconOffset);
    };
  }, []);
  return (
    <ImgContainer>
      <Img
        src={props.imgSrc ?? "/no-image-person.jpg"}
        alt='user image'
        ref={imageRef}
      />
      <Fab
        color='primary'
        size='small'
        ref={imgIconRef}
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "absolute",
        }}>
        <AddAPhotoIcon onClick={handleUploadImgClick} fontSize='small' />
      </Fab>
      <input
        type='file'
        accept='.png, .jpg, .jpeg'
        hidden
        ref={imgUploadRef}
        onChange={handleUploadImgLoaded}
      />
    </ImgContainer>
  );
};

export default ProjectImageUpload;
