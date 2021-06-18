import React, { useState } from 'react';
import { makeStyles, Container, Typography, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: 'center',
    margin: theme.spacing(1, 0, 4),
  },
  submitButton: {
    marginTop: theme.spacing(4),
  },
}));

export const Signup: React.FC = () => {
  const { heading, submitButton } = useStyles();

  const [json, setJson] = useState<string>();

  return (
    <Container maxWidth="xs">
      <Typography className={heading} variant="h3">
      Sign Up Form
      </Typography>
      <form>
        {/* <TextField
          variant="outlined"
          margin="normal"
          label="Email"
          fullWidth
          required
        /> */}
        <TextField
          variant="outlined"
          margin="normal"
          label="Username"
          fullWidth
          required
        />
        <TextField
          variant="outlined"
          margin="normal"
          label="Password"
          type="password"
          fullWidth
          required
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={submitButton}
        >
        Sign Up
        </Button>
        {json && (
          <>
            <Typography variant="body1">

            </Typography>
            <Typography variant="body2">{json}</Typography>
          </>
        )}
      </form>
    </Container>
  );
};
