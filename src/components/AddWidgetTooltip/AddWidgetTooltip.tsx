import React, { useState } from 'react';
import { Fab, Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import './AddWidgetTooltip.scss';
import { AddWidgetsDialog } from 'components';

export const AddWidgetTooltip: React.FC = () => {
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
        <Fab color="primary" className="add-widget-fab" onClick={openDialog}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <AddWidgetsDialog isOpen={isDialogOpen} onClose={closeDialog} />
    </>
  );
};
