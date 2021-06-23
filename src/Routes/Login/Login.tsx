import React from 'react';
import axios, { AxiosResponse } from 'axios';
import { useForm } from 'react-hook-form';
import { FormInput } from 'interfaces';
import { Container, Typography, TextField, Button } from '@material-ui/core';
import { useStyles } from 'styles';

export const Login: React.FC = () => {
  const { heading, submitButton } = useStyles();
  const { register, handleSubmit } = useForm<FormInput>();

  const onSubmit = (data: FormInput) => {
    axios.post('http://localhost:4000/login', {
      username: data.username,
      password: data.password,
    }, {
      withCredentials: true,
    }).then((res: AxiosResponse) => {
      if (res.data === 'success') {
        window.location.href = '/';
      }
    }, () => {
      console.log('Failure');
    });
  };

  return (
    <Container maxWidth="xs">
      <Typography className={heading} variant="h3">Please Login</Typography>
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
