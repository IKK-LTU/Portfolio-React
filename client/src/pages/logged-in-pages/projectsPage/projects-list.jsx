import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tooltip,
  Button,
} from "@mui/material";
import {
  ProjectsSelector,
  FetchSelector,
  fetchProjects,
  fetchProject,
  deleteProjectItem,
  updateProjectItem,
  createProjectItem,
} from "../../../store/projects";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";

const ProjectsList = ({ projects }) => {
  // const { projects, loading } = useContext(DataContext);
const dispatch = useDispatch();
  const createItem = () => {
    const projectInfo = {
      date: "1999-09-19",
      category: 1,
      title: "Figma design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio error facilis dolores ipsam at sequi commodi ad, voluptatibus porro perspiciatis et iste voluptate ipsum rem accusamus quos, nulla voluptates animi ratione? Vel magni alias molestiae eligendi explicabo labore porro facilis sed blanditiis. Nesciunt, sit cum enim consequuntur excepturi obcaecati suscipit quod! Officia, numquam placeat quasi tenetur nulla ducimus, nesciunt possimus cupiditate, quae odio facere na... voluptate unde sapiente magni ab modi molestias dolorum nisi tempore? Nobis iste repudiandae a quod unde doloribus quis commodi in officiis quos hic mollitia, ipsam quam, eius consequuntur recusandae atque quisquam facilis. Neque, distinctio? tenetur nulla ducimus, nesciunt possimus cupiditate, quae odio facere natus optio voluptate unde sapiente magni ab modi molestias dolorum nisi tempore? Nobis iste repudiandae a quod unde doloribus quis commodi in officiis quos hic mollitia, ipsam quam, eius consequuntur recusandae atque quisquam facilis. Neque, distinctio?",
      editor: "Maiklas",
      technologies: ["React", "HTML", "CSS"],
      images: [
        "http://localhost:5000/images/BD.gif",
        "http://localhost:5000/images/BD.gif",
        "http://localhost:5000/images/BD.gif",
      ],
    };
    dispatch(createProjectItem({ projectInfo }));
  };
  const updateItem = (id) => {
    const projectInfo = {
      date: "2000-12-30",
      category: 1,
      title: "Updated Figma design",
    };
    dispatch(updateProjectItem({ itemId: id, projectInfo }));
  };

  const deleteItem = (id) => {
    dispatch(deleteProjectItem({ itemId: id }));
  };

  return (
    <TableContainer component={Paper} sx={{ backgroundColor: "white" }}>
      <Button onClick={createItem}>Create Project </Button>
      <Button onClick={deleteItem}>Delete Project </Button>
      <Button onClick={updateItem}>Update Project </Button>
      <Table
        sx={{ minWidth: 650, backgroundr: "white", border: 1 }}
        aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align='right'>Title</TableCell>
            <TableCell align='right'>Date</TableCell>
            <TableCell align='right'>Last Editor</TableCell>
            <TableCell align='right'>Image</TableCell>
            <TableCell align='right'></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((row) => (
            <TableRow
              key={row.id}
              onClick={() => updateItem(row.id)}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component='th' scope='row'>
                {row.id}
              </TableCell>
              <TableCell align='right'>{row.title}</TableCell>
              <TableCell align='right'>{row.date}</TableCell>
              <TableCell align='right'>{row.editor}</TableCell>
              <TableCell align='right'>
                <img alt='img' src={row.images} />
              </TableCell>
              <TableCell sx={{ width: "70px", px: 0 }} align='center'>
                <Tooltip title='Edit'>
                  <EditRoundedIcon
                    sx={{ color: "#00fd13", cursor: "pointer" }}
                  />
                </Tooltip>
                <Tooltip onClick={() => deleteItem(row.id)} title='Remove'>
                  <HighlightOffRoundedIcon
                    sx={{ color: "red", ml: 1, cursor: "pointer" }}
                  />
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProjectsList;
