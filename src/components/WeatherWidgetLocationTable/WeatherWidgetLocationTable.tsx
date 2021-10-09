import React from 'react';
import { WeatherWidgetLocationTableProps } from 'interfaces';
import { Box, Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

export const WeatherWidgetLocationTable: React.FC<WeatherWidgetLocationTableProps> = ({ locations, onSelect, current }) => {
  return (
    <>
      {locations.map((location) =>
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          key={location.id}
          mt={1}
          mb={1}
          onClick={() => onSelect(location)}
        >
          <Button variant="outlined" color="primary">
            {location.name}
          </Button>
          {current?.id === location.id ? <Alert severity="info">Current City</Alert> :''}
        </Box>,
      )}
    </>
  );
};
