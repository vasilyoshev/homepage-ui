import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormInput } from 'interfaces';
import { Container, Typography, TextField, Button } from '@material-ui/core';
import { useStyles } from 'styles';
import { useDispatch } from 'react-redux';
import { signupUser, clearState } from 'slices';
import { useAppSelector } from 'store';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { schema } from 'schemas';
import { yupResolver } from '@hookform/resolvers/yup';

export const Signup: React.FC = () => {
  const { heading, submitButton } = useStyles();
  const { register, handleSubmit, formState: { errors } } = useForm<FormInput>({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const { isSuccess, isError, errorMessage } = useAppSelector((state) => state.user);

  const onSubmit = (data: FormInput) => {
    dispatch(signupUser(data));
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success('Your registration is successfull');
      dispatch(clearState());
      history.push('/login');
    }
    if (isError) {
      toast.error('Something gets wrong!', { duration: 2000 });
      dispatch(clearState());
    }
  },[isSuccess, isError, errorMessage, history, dispatch]);

  return (
    <Container maxWidth="xs">
      <Typography className={heading} variant="h4">
        Register
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
