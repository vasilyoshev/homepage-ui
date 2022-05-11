import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormInput } from 'interfaces';
import { Container, Typography, TextField, Button } from '@mui/material';
import { loginUser, clearState } from 'slices';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'store';
import { useNavigate } from 'react-router-dom';

export const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<FormInput>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSuccess, isError } = useAppSelector((state) => state.user);

  const onSubmit = (data: FormInput) => {
    dispatch(loginUser(data));
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      dispatch(clearState());
    }
    if (isSuccess) {
      dispatch(clearState());
    }
  }, [isSuccess, isError, dispatch, navigate]);

  return (
    <Container maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          Please Login
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField {...register('username')} variant="outlined" margin="normal" label="Username" fullWidth required />
          <TextField
            {...register('password')}
            variant="outlined"
            margin="normal"
            label="Password"
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
