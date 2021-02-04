import { render } from 'utils';
import { App } from './App';

describe('App', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });
});
