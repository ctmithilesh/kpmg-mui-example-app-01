import { Box, Button, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import FloatingButton from "./FloatingButton";

const JobRegistrationForm = () => {

  const [age, setAge] = useState()

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
    <div>
      <Box sx={{backgroundColor:'lightblue', m:2, p:2}}>
          <Typography variant="h3" gutterBottom>
          Job Registration Form
          </Typography>
          <InputLabel id="demo-simple-select-helper-label">Your Name</InputLabel>
        <TextField
          id=""
          label=""
          variant="outlined"
          placeholder="Enter your name"
          sx={{ width:`100%`, m:1}}
        />
        <InputLabel id="demo-simple-select-helper-label">Your Email</InputLabel>
         <TextField
          id=""
          label=""
          variant="outlined"
          placeholder="Enter your Email"
          sx={{ width:`100%`, m:1}}
        />
        <InputLabel id="demo-simple-select-helper-label">Qualifications</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Qualifications"
          sx={{ width:`100%`, m:1}}
        >
          <MenuItem value={"BCOM"}>BCOM</MenuItem>
          <MenuItem value={"BTECH"}>BTECH</MenuItem>
          <MenuItem value={"BTECH"}>BTECH</MenuItem>
        </Select>
        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Age"
          sx={{width:`50%`, m:1}}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={"20-30"}>20-30</MenuItem>
          <MenuItem value={"30-40"}>30-40</MenuItem>
        </Select>
        <br />
        <Button variant="contained" color="success" >
          Submit
        </Button>
      </Box>
      <FloatingButton />
      </div>
    </>
  );
};

export default JobRegistrationForm;
