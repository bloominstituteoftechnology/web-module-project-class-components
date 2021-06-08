import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

// ==============================================

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

// ==============================================

export default function DatePicker({setApntDate}) {

  // -------------------------------------------

  const classes = useStyles();

  // -------------------------------------------

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="Choose Date"
        type="date"
        defaultValue="2022-01-01"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={e => {
          setApntDate(e.target.value);
        }}
      />
    </form>
  );
}

// ==============================================