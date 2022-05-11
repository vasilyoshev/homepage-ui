import { render } from 'utils';
import { SignUp } from './SignUp';

describe('SignUp', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<SignUp />);

    expect(asFragment()).toMatchSnapshot();
  });
});
