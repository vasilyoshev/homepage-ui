import React from 'react';
import { CryptoCurrencyTrackerWidgetInfoProps } from 'interfaces';
import { Card, CardContent, Box, CardMedia, Typography } from '@material-ui/core';
import useStyles from './styles';

export const CryptoCurrencyTrackerWidgetInfo: React.FC<CryptoCurrencyTrackerWidgetInfoProps> = ({ coins }) => {
  const classes = useStyles();
  return (
    <>
      {!!coins.length && coins.map((coin) => (
        <Card className={classes.root} key={coin.id} elevation={5}>
          <CardContent>
            <CardMedia
              className={classes.icon}
              image={coin.image}
              component="img"
              alt="crypto"
            />
            <Typography align='center' variant="h5" gutterBottom>
              {coin.name}
            </Typography>
            <Typography align='center' variant="h5" color="primary" >
            Price: ${coin.current_price.toLocaleString()}
            </Typography>
            <hr/>
            <div>
              <Typography align='center' variant="body1" gutterBottom>
              Price change 24h:
              </Typography>
              {coin.price_change_percentage_24h < 0 ? (
                <Box
                  bgcolor="error.main"
                  color="error.contrastText"
                  textAlign="center"
                  fontWeight="fontWeightMedium"
                  border={1}
                  borderBottom={1}
                  borderRadius={16}
                  fontSize={18}>
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </Box>
              ) : (
                <Box
                  bgcolor="success.main"
                  color="info.contrastText"
                  textAlign="center"
                  fontWeight="fontWeightMedium"
                  border={1}
                  borderBottom={1}
                  borderRadius={16}
                  fontSize={18}>+{coin.price_change_percentage_24h.toFixed(2)}%
                </Box>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};
