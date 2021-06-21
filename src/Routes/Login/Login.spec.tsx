import { render } from 'utils';
import { Login } from './Login';

describe('Login', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<Login />);

    expect(asFragment()).toMatchSnapshot();
  });
});
