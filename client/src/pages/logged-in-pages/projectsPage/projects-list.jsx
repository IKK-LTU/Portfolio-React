import React, { useContext } from "react";
import { DataContext } from "../../public-pages/context/data-context";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";



const ProjectsList = () => {
  const { projects, loading } = useContext(DataContext);
  console.log(projects, loading);
  return (
    <TableContainer component={Paper} sx={{ backgroundColor: "white" }}>
      {loading ? (
        <h1>Krauna</h1>
      ) : (
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
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component='th' scope='row'>
                  {row.id}
                </TableCell>
                <TableCell align='right'>{row.title}</TableCell>
                <TableCell align='right'>{row.date}</TableCell>
                <TableCell align='right'>{row["last-editor"]}</TableCell>
                <TableCell align='right'>
                  <img alt='img' src={row.images} />
                </TableCell>
                <TableCell sx={{ width: "70px", px: 0 }} align='center'>
                  <EditRoundedIcon sx={{ color: "#00fd13",cursor:'pointer' }} />
                  <HighlightOffRoundedIcon sx={{ color: "red",ml:1,cursor:'pointer' }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
};

export default ProjectsList;
