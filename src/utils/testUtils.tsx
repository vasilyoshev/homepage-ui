import React from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// TODO extract mocks to separate files, e.g. widgetsMock.js
const mockState = {
  loading: {},
  widgets: { widgetsProps: [] },
};
const createMockStore = configureStore([thunk]);
const store = createMockStore(mockState);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Providers = ({ children }: any) => (
  <Provider store={store}>
    <MemoryRouter initialEntries={['/']}>{children}</MemoryRouter>
  </Provider>
);

const customRender = (ui: React.ReactElement, options?: RenderOptions): RenderResult =>
  render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';

export { customRender as render };
