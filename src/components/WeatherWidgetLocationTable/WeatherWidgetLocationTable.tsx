import React from 'react';
import { WeatherWidgetLocationTableProps } from 'interfaces';
import { Box } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import styles from './WeatherWidgetLocationTable.module.scss';

export const WeatherWidgetLocationTable: React.FC<WeatherWidgetLocationTableProps> = ({ locations, onSelect, current }) => {
  return (
    <>
      {locations.map((location) =>
        <Box
          display='flex'
          flexDirection='row'
          key={location.id}
          mt={1}
          mb={1.2}
          onClick={() => onSelect(location)}>
          <Box className={styles.cityName}
            p={1}
            textAlign='center'
            bgcolor="text.disabled"
            color="background.paper"
            width='50%'
            border={1}
            borderRadius={16}
            fontSize={16}>
            {location.name}
          </Box>
          <Box>
            {current?.id === location.id ? <Alert variant="filled" severity="info">Current City</Alert> :''}
          </Box>
        </Box>,
      )}
    </>
  );
};
