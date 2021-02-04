import { Home } from './Home';
import { render } from 'utils';

describe('Home', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<Home />);

    expect(asFragment()).toMatchSnapshot();
  });
});
