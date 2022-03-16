import React ,{ useEffect } from "react";
import { Container, Typography } from "@mui/material";
import UsersListTable from './users-list-table';
import AdminService from "../../../services/admin-service";

const UsersPage = () => {
  useEffect(() => {
    AdminService.getUsers();
  }, []);
  return (
    <Container>
      <Typography textAlign='center'sx={{pb:4}} variant='h3' component='h2'>Users List</Typography>
      <UsersListTable />
    </Container>
  )
}

export default UsersPage