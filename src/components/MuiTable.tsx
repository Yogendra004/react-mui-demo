import React from "react";

import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>FirstName</TableCell>
            <TableCell>LastName</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((item) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td. &:last-child th": { border: 0 } }}
            >
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.first_name}</TableCell>
              <TableCell>{item.last_name}</TableCell>
              <TableCell align="center">{item.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Babbette",
    last_name: "Lambourne",
    email: "blambourne0@berkeley.edu",
    gender: "Female",
    ip_address: "241.193.28.22",
  },
  {
    id: 2,
    first_name: "Vernice",
    last_name: "Ferrieri",
    email: "vferrieri1@smh.com.au",
    gender: "Female",
    ip_address: "192.118.131.61",
  },
  {
    id: 3,
    first_name: "Ches",
    last_name: "Linzee",
    email: "clinzee2@dot.gov",
    gender: "Male",
    ip_address: "138.82.16.135",
  },
  {
    id: 4,
    first_name: "Euell",
    last_name: "Maskall",
    email: "emaskall3@vinaora.com",
    gender: "Male",
    ip_address: "212.53.126.250",
  },
  {
    id: 5,
    first_name: "Danie",
    last_name: "Heigold",
    email: "dheigold4@ycombinator.com",
    gender: "Male",
    ip_address: "227.97.227.252",
  },
  {
    id: 6,
    first_name: "Mahmud",
    last_name: "Yushkin",
    email: "myushkin5@google.com.au",
    gender: "Male",
    ip_address: "228.15.181.48",
  },
  {
    id: 7,
    first_name: "Moss",
    last_name: "Dudson",
    email: "mdudson6@shutterfly.com",
    gender: "Male",
    ip_address: "185.214.72.29",
  },
  {
    id: 8,
    first_name: "Hussein",
    last_name: "Doelle",
    email: "hdoelle7@cisco.com",
    gender: "Male",
    ip_address: "50.104.2.97",
  },
  {
    id: 9,
    first_name: "Deidre",
    last_name: "O' Mulderrig",
    email: "domulderrig8@1und1.de",
    gender: "Female",
    ip_address: "65.8.81.21",
  },
  {
    id: 10,
    first_name: "Cornell",
    last_name: "Sink",
    email: "csink9@blinklist.com",
    gender: "Agender",
    ip_address: "156.96.119.239",
  },
];
