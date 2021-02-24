import React, { useState } from 'react';
import { Fab, Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import styles from './AddWidgetFab.module.scss';
import { ManageWidgetsDialog } from 'components';

export const AddWidgetFab: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };
  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <Tooltip title="Add Widget">
        <Fab color="primary" className={styles['add-widget-fab']} onClick={openDialog}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <ManageWidgetsDialog isOpen={isDialogOpen} onClose={closeDialog} />
    </>
  );
};
