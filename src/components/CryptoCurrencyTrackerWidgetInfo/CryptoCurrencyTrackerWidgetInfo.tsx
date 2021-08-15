import React from 'react';
import { CryptoCurrencyTrackerWidgetInfoProps } from 'interfaces';
import { Card, CardContent, Box } from '@material-ui/core';
import styles from './CryptoCurrencyTrackerWidgetInfo.module.scss';

export const CryptoCurrencyTrackerWidgetInfo: React.FC<CryptoCurrencyTrackerWidgetInfoProps> = ({ coins }) => {
  return (
    <>
      {!!coins.length && coins.map((coin) => (
        <Card className={styles.coinCard} key={coin.id}>
          <CardContent>
            <Box
              mb={0.5}
              position="relative"
              color="text.primary"
              fontSize={22}
              fontWeight="fontWeightMedium">
              {coin.name}
              <img
                className={styles.icon}
                src={coin.image}
                alt="crypto" />
            </Box>
            <Box
              bgcolor="info.main"
              color="info.contrastText"
              fontSize={18}
              p={1}
              border={1}
              borderBottom={1}
              borderRadius={16}>
            Price: ${coin.current_price.toLocaleString()}
            </Box>
            <Box
              mb={0.5}
              color="primary.main"
              fontSize={16}
              fontWeight="fontWeightRegular">
          Cap: ${coin.market_cap.toLocaleString()}
            </Box>
            <div>
              Price change 24h:
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
