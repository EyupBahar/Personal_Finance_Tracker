import { Button, Container, MenuItem, Paper, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEntry } from "../redux/actions/actions";
import { currencies, initial, types } from "../redux/constants/constants";
import TableData from "./TableData";
import {exchange} from "../utils/currency";

const Home = () => {
  const [val, setVal] = useState(initial);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.allEntries);

  const handleChange = (e) => {
    const value = e.target.value;       
    setVal({ ...val, [e.target.name]: value });
  };

  const handleSave = () => {
    if (Object.values(val).every((i) => i != false)) dispatch(addEntry(val));
    else window.alert("Please fill all fields");
  };

  return (
    <Paper style={{ margin: `5rem`, backgroundColor: `#fffaed` }}>
      <Box my={5} p={5} style={{ display: "flex", justifyContent: "space-between", columnGap: `1rem` }}>
        <TextField InputLabelProps={{ shrink: true }} fullWidth select name="type" label="Income or Expense" value={val.type} onChange={handleChange}>
          {types.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        {/* <h1>{ }</h1> */}
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
        <TextField InputLabelProps={{ shrink: true }} fullWidth select name="currency" label="Select" value={val.currency} onChange={handleChange}>
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button variant="outlined" color="primary" onClick={handleSave}>
          Add
        </Button>
      </Box>
      <Box p={5}>
        <TableData data={data} />
      </Box>
    </Paper>
  );
};

export default Home;