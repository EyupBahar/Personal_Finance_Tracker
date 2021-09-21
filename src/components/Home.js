import { Button, MenuItem, Paper, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEntry, editEntry } from "../redux/actions/actions";
import {
  currencies,
  getId,
  initial,
  types,
} from "../redux/constants/constants";
import TableData from "./TableData";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { sum } from "../utils/reduce";
import { exchange } from "../utils/currency";

const Home = () => {
  const [val, setVal] = useState(initial);
  const [toplam, setToplam] = useState({ expenses: 0, incomes: 0 });
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.allEntries);

  const handleChange = (e) => {
    const value = e.target.value;
    setVal({ ...val, [e.target.name]: value });
  };

  const handleSave = () => {
    if (!Object.values(val).every((i) => i != false))
      return window.alert("Please fill all fields");
    if (val.id) {
      dispatch(editEntry(val));
    } else {
      val.id = getId();
      dispatch(addEntry(val));
    }
    setVal(initial);
  };

  const HandleChange = () => {};
  // useEffect(async () => {
  //   // let expenses = await exchange("USD", "TRY");
  //   // let incomes = await exchange("USD", "TRY");
  //   // setToplam({
  //   //   expenses,
  //   //   incomes,
  //   // });
  // }, []);
  return (
    <Paper style={{ margin: `5rem`, backgroundColor: `#fffaed` }}>
      <Box
        my={5}
        p={5}
        style={{
          display: "flex",
          justifyContent: "space-between",
          columnGap: `1rem`,
        }}
      >
        <TextField
          InputLabelProps={{ shrink: true }}
          fullWidth
          select
          name="type"
          label="Income or Expense"
          value={val.type}
          onChange={handleChange}
        >
          {types.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          InputLabelProps={{ shrink: true }}
          fullWidth
          value={val.item}
          name="item"
          onChange={handleChange}
          label="Item"
          variant="outlined"
        />
        <TextField
          InputLabelProps={{ shrink: true }}
          fullWidth
          type="number"
          value={val.amount}
          name="amount"
          onChange={handleChange}
          label="Amount"
          variant="outlined"
        />
        <TextField
          InputLabelProps={{ shrink: true }}
          fullWidth
          select
          name="currency"
          label="Select"
          value={val.currency}
          onChange={handleChange}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button variant="outlined" color="primary" onClick={handleSave}>
          {val.id ? "Update" : "Add"}
        </Button>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", columnGap: `2rem` }}
      >
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Total Income
            </Typography>
            <Typography variant="h5" component="div">
              {toplam.incomes}
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Total Expense
            </Typography>
            <Typography variant="h5" component="div">
              {toplam.expenses}
            </Typography>
          </CardContent>
        </Card>
        <Button variant="outlined" color="primary" onClick={handleChange}>
          Change
        </Button>
      </Box>
      <Box p={5}>
        <TableData data={data} setVal={setVal} />
      </Box>
    </Paper>
  );
};

export default Home;
