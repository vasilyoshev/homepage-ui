import React from 'react';
import { WeatherWidgetLocationTableProps } from 'interfaces';
import { Table, TableContainer, TableBody, TableRow, TableCell } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import styles from './WeatherWidgetLocationTable.module.scss';

export const WeatherWidgetLocationTable: React.FC<WeatherWidgetLocationTableProps> = ({ locations, onSelect, current }) => {
  return (
    <TableContainer>
      <Table size="small">
        <TableBody>
          {locations.map((location) =>
            <TableRow  key={location.id} onClick={() => onSelect(location)}>
              <TableCell className={styles.cityTableCell}>{location.name}</TableCell>
              <TableCell>{current?.id === location.id ? <Alert className={styles.alert} severity="info">Current City</Alert> : ''}</TableCell>
            </TableRow>,
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
