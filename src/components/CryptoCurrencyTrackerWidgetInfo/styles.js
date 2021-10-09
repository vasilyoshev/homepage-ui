import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '6px',
    '&:hover': {
      cursor: 'grab',
      backgroundColor: 'rgb(238, 237, 237)',
    },
  },
  icon: {
    margin: 'auto',
    width: '120px',
    height: '120px',
  },
});
