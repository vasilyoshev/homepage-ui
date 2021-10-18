import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WidgetProps, WidgetsSliceState } from 'interfaces';
import { RootState } from 'store';

const initialState: WidgetsSliceState = {
  widgetsProps: [
    { name: 'calendar', isActive: true },
    { name: 'todo', isActive: true },
    { name: 'crypto', isActive: true },
    { name: 'timer', isActive: false },
    { name: 'weather', isActive: true },
  ],
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
export const selectIsCalendarWidgetActive = ({ widgets }: RootState): boolean =>
  widgets.widgetsProps.find((widgetProps) => widgetProps.name === 'calendar')?.isActive || false;
export const selectIsTodoWidgetActive = ({ widgets }: RootState): boolean =>
  widgets.widgetsProps.find((widgetProps) => widgetProps.name === 'todo')?.isActive || false;
export const selectIsCryptoCurrencyWidgetActive = ({ widgets }: RootState): boolean =>
  widgets.widgetsProps.find((widgetProps) => widgetProps.name === 'crypto')?.isActive || false;
export const selectIsTimerWidgetActive = ({ widgets }: RootState): boolean =>
  widgets.widgetsProps.find((widgetProps) => widgetProps.name === 'timer')?.isActive || false;
export const selectIsWeatherWidgetActive = ({ widgets }: RootState): boolean =>
  widgets.widgetsProps.find((widgetProps) => widgetProps.name === 'weather')?.isActive || false;

export const { toggleWidget } = widgetsSlice.actions;
