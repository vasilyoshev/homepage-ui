import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormInput } from 'interfaces';
import { Container, Typography, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { signupUser, clearState } from 'slices';
import { useAppSelector } from 'store';
import { useHistory } from 'react-router-dom';
import { schema } from 'schemas';
import { yupResolver } from '@hookform/resolvers/yup';

export const Signup: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const { isSuccess, isError } = useAppSelector((state) => state.user);

  const onSubmit = (data: FormInput) => dispatch(signupUser(data));

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(clearState());
      history.push('/login');
    }
    if (isError) {
      dispatch(clearState());
    }
  }, [isSuccess, isError, history, dispatch]);

  return (
    <Container maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            {...register('username')}
            variant="outlined"
            margin="normal"
            label="Username"
            helperText={errors.username?.message}
            error={!!errors.username?.message}
            fullWidth
            required
          />
          <TextField
            {...register('password')}
            variant="outlined"
            margin="normal"
            label="Password"
            helperText={errors.password?.message}
            error={!!errors.password?.message}
            type="password"
            fullWidth
            required
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            SUBMIT
          </Button>
        </form>
      </div>
    </Container>
  );
};
