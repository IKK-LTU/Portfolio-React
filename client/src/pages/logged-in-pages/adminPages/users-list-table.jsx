import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUsers, selectloading } from "../../../store/users";
import {
  Table,
  TableCell,
  TableRow,
  TableContainer,
  TableHead,
  TableBody,
  Paper,
} from "@mui/material";

const UsersListTable = () => {
  const users = useSelector(selectUsers);
  const isFetched = useSelector(selectloading);
  const [cells, setCells] = useState([]);

  useEffect(() => {
    if(isFetched) setCells(Object.keys(users[0]));
  }, [users]);
  
  return (
    <TableContainer component={Paper} sx={{ background: "white" }}>
      {isFetched ? (
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableBody>
          <TableHead>
            <TableRow>
              {cells.map((cell) => {
                return <TableCell key={cell}>{cell}</TableCell>;
              })}
              
            </TableRow>
              {users.map((value) => (
                <TableRow
                  key={value.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component='th' scope='row'>
                    {value.id}
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    {value.email}
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    {value.password}
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    {value.name}
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    {value.surname}
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    {value.role}
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    {value.imgSrc}
                  </TableCell>
                </TableRow>
              ))}
          </TableHead>
          </TableBody>
        </Table>
      ) : (
        <h1>krauna</h1>
      )}
    </TableContainer>
  );
};

export default UsersListTable;
