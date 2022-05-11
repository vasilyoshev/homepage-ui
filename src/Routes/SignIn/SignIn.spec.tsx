import { render } from 'utils';
import { SignIn } from './SignIn';

describe('SignIn', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<SignIn />);

    expect(asFragment()).toMatchSnapshot();
  });
});
