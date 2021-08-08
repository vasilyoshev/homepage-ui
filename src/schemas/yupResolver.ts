import * as yup from 'yup';

export const schema = yup.object().shape({
  username: yup.string().required().min(5).max(25),
  password: yup.string().required().min(8).max(120),
});
