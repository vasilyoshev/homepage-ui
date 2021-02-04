import axios from 'axios';
import { decrementLoadingCount, incrementLoadingCount } from 'slices';
import store from 'store';

export const handleLoadingState = (): void => {
  axios.interceptors.response.use(
    (response) => {
      setTimeout(() => store.dispatch(decrementLoadingCount()), 200);

      return response;
    },
    () => {
      store.dispatch(decrementLoadingCount());
    },
  );

  axios.interceptors.request.use((request) => {
    store.dispatch(incrementLoadingCount());

    return request;
  });
};
