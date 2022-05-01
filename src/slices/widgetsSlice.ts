import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WidgetProps, WidgetsSliceState } from 'interfaces';
import { RootState } from 'store';

const initialState: WidgetsSliceState = {
  widgetsProps: [{ name: 'todo', isActive: true }],
};

export const widgetsSlice = createSlice({
  name: 'widgets',
  initialState,
  reducers: {
    toggleWidget: (state, action: PayloadAction<string>) => {
      const widget = state.widgetsProps.find((widget) => widget.name === action.payload);
      if (widget) widget.isActive = !widget.isActive;
    },
  },
});

export const selectAllWidgetsProps = ({ widgets }: RootState): Array<WidgetProps> => widgets.widgetsProps;
export const selectIsTodoWidgetActive = ({ widgets }: RootState): boolean =>
  widgets.widgetsProps.find((widgetProps) => widgetProps.name === 'todo')?.isActive || false;
export const { toggleWidget } = widgetsSlice.actions;
