import React, { useContext } from "react";
// import { styled } from "@mui/material/styles";
import BlogCard from "../../components/blogCard/blogCard";
import { DataContext } from "./context/data-context";
import { Container } from "@mui/material";

const BlogPage = () => {
  const { blogs, loading } = useContext(DataContext);
  return (
    <Container
      sx={{ py: 5, display: "flex", flexFlow: "row wrap", gap: "2rem" }}>
      {loading ? (
        <h1>Krauna</h1>
      ) : (
        blogs.map((blog) => {
          return (
            <BlogCard
              key={blog.id}
              blogTitle={blog.title}
              blogDate={blog.date}
              blogAuthor={blog.author}
              blogText={blog.text}
            />
          );
        })
      )}
    </Container>
  );
};

export default BlogPage;