import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardActionArea, Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import { selectIsTodoWidgetActive, toggleWidget } from 'slices';
import styles from './ManageWidgetsDialog.module.scss';

type ManageWidgetsDialogType = {
  isOpen: boolean;
  onClose: () => void;
};

export const ManageWidgetsDialog: React.FC<ManageWidgetsDialogType> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const isTodoWidgetActive = useSelector(selectIsTodoWidgetActive);
  const toggleWidgetByName = (widgetName: string): void => {
    dispatch(toggleWidget(widgetName));
  };

  return (
    <Dialog onClose={onClose} open={isOpen} classes={{ paper: styles.addWidgetsDialogPaper }}>
      <DialogTitle className={styles.addWidgetsDialogTitle}>
        <Typography variant="h5">Manage Widgets</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={styles.dialogContent}>
        <Card className={styles.widgetPreviewCard} onClick={() => toggleWidgetByName('todo')}>
          <CardActionArea classes={{ root: styles.addWidgetsActionAreaRoot }}>
            <FormatListNumberedIcon
              color={isTodoWidgetActive ? 'primary' : 'secondary'}
              className={styles.widgetIcon}
            />
          </CardActionArea>
        </Card>
      </DialogContent>
    </Dialog>
  );
};
