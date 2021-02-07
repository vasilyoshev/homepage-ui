import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import './AddWidgetsDialog.scss';

type AddWidgetsDialogType = {
  isOpen: boolean;
  onClose: () => void;
};

export const AddWidgetsDialog: React.FC<AddWidgetsDialogType> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Dialog onClose={onClose} open={isOpen}>
      <DialogTitle disableTypography className="add-widget-dialog-title">
        <Typography variant="h4">Add Widgets</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>Test</DialogContent>
    </Dialog>
  );
};
