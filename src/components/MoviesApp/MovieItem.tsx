import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface MoviesInfo {
  id?: number;
  title: string;
  genres: Array<string>;
  duration: number;
  poster: string;
  summary: string;
}

export const MovieItem: React.FC<MoviesInfo> = ({
  title,
  genres,
  duration,
  poster,
  summary
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component='img'
        height='140'
        image={poster}
        alt='movie-poster'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        <Typography gutterBottom variant='h5' component='div'>
          {genres}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {duration}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {summary}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Add to Favorites</Button>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
};
