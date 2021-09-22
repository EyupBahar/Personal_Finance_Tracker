import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteItem } from "../redux/actions/actions";
export default function TableData({ data, setVal }) {
  const dispatch = useDispatch();
  const editItem = (row) => {
    setVal(row);
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Item</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Currency</TableCell>
            <TableCell align="right" style={{ width: `15rem` }}>
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.item}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.currency}</TableCell>
              <TableCell
                align="right"
                style={{
                  display: "flex",
                  justifyContent: "right",
                  columnGap: `1rem`,
                }}
              >
                <Button variant="outlined" onClick={() => editItem(row)}>
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => dispatch(deleteItem(row.item))}
                  style={{ borderColor: "red", color: "red" }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
