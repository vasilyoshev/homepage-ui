import React from 'react';
import { useForm } from 'react-hook-form';
import { FormInput } from 'interfaces';
import { Container, Typography, TextField, Button } from '@material-ui/core';
import { useStyles } from 'styles';
import { useDispatch } from 'react-redux';
import { signupUser } from 'slices';
// import { useAppSelector } from 'store';

export const Signup: React.FC = () => {
  const { heading, submitButton } = useStyles();
  const { register, handleSubmit } = useForm<FormInput>();
  const dispatch = useDispatch();
  // const isSuccess = useAppSelector((state) => state.user.isSuccess);

  const onSubmit = (data: FormInput) => {
    dispatch(signupUser(data));
  };

  /* useEffect(() => {
    if (isSuccess) {
      window.location.href = '/login';
    }
  },[isSuccess]); */

  return (
    <Container maxWidth="xs">
      <Typography className={heading} variant="h3">Register</Typography>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          {...register('username')}
          variant="outlined"
          margin="normal"
          label="Username"
          fullWidth
          required
        />
        <TextField
          {...register('password')}
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
        SUBMIT
        </Button>
      </form>
    </Container>
  );
};
