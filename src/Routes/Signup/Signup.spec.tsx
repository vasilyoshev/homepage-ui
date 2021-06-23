import { render } from 'utils';
import { Signup } from './Signup';

describe('Signup', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<Signup />);

    expect(asFragment()).toMatchSnapshot();
  });
});
