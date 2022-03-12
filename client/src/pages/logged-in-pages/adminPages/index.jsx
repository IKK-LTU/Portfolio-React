import React from 'react'
import { Container, Typography } from "@mui/material";
import UsersListTable from './users-list-table';
const UsersPage = () => {
  return (
    <Container>
      <Typography textAlign='center' variant='h3' component='h2'>User Manager Panel</Typography>
      <UsersListTable/>
    </Container>
  )
}

export default UsersPage