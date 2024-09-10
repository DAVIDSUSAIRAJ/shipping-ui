import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";
import doubleHeadArrow from "./images/doubleHeadArrow.png";

const options = ["Option 1", "Option 2"];

export function App() {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Controllable" />
          )}
        />

        <img
          src={doubleHeadArrow}
          width={25}
          height={25}
          alt="Double Head Arrow"
        />
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Controllable" />
          )}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              label="From Date"
              sx={{
                width: 300,
                fontSize: 18,
                color: "blue",
                textAlign: "center",
              }}
              format="DD-MM-YYYY"
            />
          </DemoContainer>
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              label="From Date"
              sx={{
                width: 300,
                fontSize: 18,
                color: "blue",
                textAlign: "center",
              }}
              format="DD-MM-YYYY"
            />
          </DemoContainer>
        </LocalizationProvider> */}
    <TextField
  className="input_txt_label"
  fullWidth
  id="departure"
  label="Departure Date"
  type="datetime-local"
  size="small"
  variant="outlined"
  InputLabelProps={{ shrink: true }}
/>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained" sx={{ width: 300 }}>
          Contained
        </Button>
      </div>
    </div>
  );
}

export default App;
