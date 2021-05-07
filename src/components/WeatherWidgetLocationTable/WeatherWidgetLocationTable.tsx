import React from 'react';
import { WeatherWidgetLocationTableProps } from 'interfaces';
import { Table, TableContainer, TableBody, TableRow, TableCell } from '@material-ui/core';
import styles from './WeatherWidgetLocationTable.module.scss';
import Alert from '@material-ui/lab/Alert';

export const WeatherWidgetLocationTable: React.FC<WeatherWidgetLocationTableProps> = ({ locations, onSelect, current }) => {
  return (
    <TableContainer className={styles.tableContainer}>
      <Table size="small" aria-label="a dense table">
        <TableBody>
          {locations.map((location) =>
            <TableRow key={location.id} onClick={() => onSelect(location)}>
              <TableCell className={styles.cityTableCell}>{location.name}</TableCell>
              <TableCell> {current?.id === location.id ? <Alert className={styles.alert} severity="info">Current City</Alert> : ''}</TableCell>
            </TableRow>,
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
