import React from 'react'
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

const ContactIcons = () => {
  return (
    <>
      <GitHubIcon
        onClick={() => window.open("https://github.com/IKK-LTU")}
        sx={{ fontSize: "2.5rem", color: "black", cursor: "pointer" }}
      />
      <LinkedInIcon onClick={() => window.open("https://www.linkedin.com/in/ignas-kunickas-81bbb013b")} sx={{ fontSize: "2.5rem", color: "#0e76a8",cursor: "pointer" }} />
      <EmailIcon onClick={() => window.open("mailto:ignas.kunickas@gmail.com")} sx={{ fontSize: "2.5rem", color: "red",cursor: "pointer" }} />
      <CallIcon onClick={()=> window.open('tel:+37061135306')} sx={{ fontSize: "2.5rem", color: "#529552",cursor: "pointer" }} />
    </>
  );
}

export default ContactIcons