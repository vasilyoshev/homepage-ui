import { Button, Stack } from '@mui/material';
import styles from './Demo.module.scss';

export const Demo: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </div>
  );
};
