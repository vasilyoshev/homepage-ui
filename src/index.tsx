import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';
import { Toaster } from 'react-hot-toast';
import { App } from './App';
import 'fontsource-roboto';
import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
    <Toaster />
  </Provider>,
  document.getElementById('root'),
);
