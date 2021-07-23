import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NativeSelect, FormControl } from "@material-ui/core";

import { useDispatch } from "react-redux";
import { fetchAsyncGetDaily } from "../covidSlice";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(3),
    minWidth: 320,
  },
}));

const SwitchCountry: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const countries = [
    "Japan",
    "United States",
    "Germany",
    "India",
    "France",
    "Italy",
    "Spain",
    "Russia",
    "Brazil",
    "Taiwan",
    "Thailand",
    "New Zealand",
    "Sweden",
  ];

  return (
    <FormControl className={classes.formControl}>
      <NativeSelect
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          dispatch(fetchAsyncGetDaily(e.target.value))
        }
      >
        {countries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default SwitchCountry;
