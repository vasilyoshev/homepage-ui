import React from 'react';
import { WeatherWidgetLocationTableProps } from 'interfaces';
import { Table, TableContainer, TableBody, TableRow, TableCell } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import styles from './WeatherWidgetLocationTable.module.scss';

export const WeatherWidgetLocationTable: React.FC<WeatherWidgetLocationTableProps> = ({ locations, onSelect, current }) => {
  return (
    <TableContainer>
      <Table size="small" aria-label="a dense table">
        <TableBody>
          {locations.map((location) =>
            <TableRow className={styles.cityTableCell} key={location.id} onClick={() => onSelect(location)}>
              <TableCell >{location.name}</TableCell>
              <TableCell>{current?.id === location.id ? <Alert severity="info">Current City</Alert> : ''}</TableCell>
            </TableRow>,
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
