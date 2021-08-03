import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormInput } from 'interfaces';
import { Container, Typography, TextField, Button } from '@material-ui/core';
import { loginUser, clearState } from 'slices';
import { useStyles } from 'styles';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'store';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export const Login: React.FC = () => {
  const { heading, submitButton } = useStyles();
  const { register, handleSubmit } = useForm<FormInput>();
  const dispatch = useDispatch();
  const history = useHistory();
  const { isSuccess, isError, errorMessage } = useAppSelector((state) => state.user);

  const onSubmit = (data: FormInput) => {
    dispatch(loginUser(data));
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success('Authentication successfull', { duration: 2000 });
      history.push('/dashboard');
    }
    if (isError) {
      toast.error('Something gets wrong!', { duration: 2000 });
      dispatch(clearState());
    }
  },[isSuccess, isError, errorMessage, dispatch, history]);

  return (
    <Container maxWidth="xs">
      <Typography className={heading} variant="h4">
        Please Login
      </Typography>
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
