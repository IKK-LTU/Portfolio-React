import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AdminService from "../../../services/admin-service";
import { selectUsers, addUser, updateUser } from "../../../store/users";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  TableHead,
  Paper,
} from "@mui/material";

const UsersListTable = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    AdminService.getUsers();
  }, []);

  console.log(users);
  return (
    <TableContainer component={Paper} sx={{ background: "white" }}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            {Object.keys(users[0]).map((cell) => {
              return <TableCell>{cell}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              {row.map((value) => {
                return (
                  <TableCell component='th' scope='row'>
                    {value}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersListTable;
