import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Menu,
  MenuItem,
} from "@mui/material";

const Users = () => {
  const products = [
    { id: 1, name: "Product A", price: 100, category: "Electronics" },
    { id: 2, name: "Product B", price: 150, category: "Fashion" },
    { id: 3, name: "Product C", price: 200, category: "Home" },
  ];

  const users = [
    { id: 1, username: "john_doe", email: "john@example.com", role: "Admin" },
    { id: 2, username: "jane_doe", email: "jane@example.com", role: "Editor" },
    { id: 3, username: "sam_smith", email: "sam@example.com", role: "Viewer" },
  ];

  const combinedData = products.map((product) => {
    const user = users.find((u) => u.id === product.id);
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
      username: user ? user.username : "",
      email: user ? user.email : "",
      role: user ? user.role : "",
    };
  });

  return (
    <Paper sx={{ padding: "16px" }}>
      <TableContainer component={Paper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ borderRight: "1px solid #00000030" }}>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {combinedData.map((row) => (
              <TableRow hover key={row.id}>
                <TableCell sx={{ borderRight: "1px solid #00000030" }}>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.username}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Users;
