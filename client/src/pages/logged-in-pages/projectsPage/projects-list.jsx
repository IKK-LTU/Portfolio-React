import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectAuth } from "../../../store/auth";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tooltip,
} from "@mui/material";
import { deleteProjectItem } from "../../../store/projects";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";

const ProjectsList = ({ projects }) => {
  const navigate = useNavigate();
  const { user } = useSelector(selectAuth);
  const goToProjectEditorPage = (id) => {
    navigate(`${id}`, { state: { id } });
  };
  
  const dispatch = useDispatch();
  const deleteItem = (id) => {
    dispatch(deleteProjectItem({ itemId: id }));
  };
  return (
    <TableContainer component={Paper} sx={{ backgroundColor: "white" }}>
      {/* <Button onClick={updateItem}>Update Project </Button> */}
      <Table
        sx={{ minWidth: 650, backgroundr: "white", border: 1 }}
        aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align='right'>Title</TableCell>
            <TableCell align='right'>Date</TableCell>
            <TableCell align='right'>Last Editor</TableCell>
            <TableCell align='right'></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component='th' scope='row'>
                {row.id}
              </TableCell>
              <TableCell align='right'>{row.title}</TableCell>
              <TableCell align='right'>{row.date}</TableCell>
              <TableCell align='right'>{row.editor}</TableCell>
              <TableCell sx={{ width: "70px", px: 0 }} align='center'>
                <Tooltip
                  onClick={() =>
                    user.role === "ADMIN" ? goToProjectEditorPage(row.id) : null
                  }
                  title={
                    user.role === "ADMIN" ? "Edit" : "You need to be an admin"
                  }>
                  <EditRoundedIcon
                    sx={{ color: "#00fd13", cursor: "pointer" }}
                  />
                </Tooltip>
                <Tooltip
                  onClick={() =>
                    user.role === "ADMIN" ? deleteItem(row.id) : null
                  }
                  title={
                    user.role === "ADMIN" ? "Remove" : "You need to be an admin"
                  }>
                  <HighlightOffRoundedIcon sx={{ ml: 1, cursor: "pointer" }} />
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
