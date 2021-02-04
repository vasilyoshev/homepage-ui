import { render } from 'utils';
import { About } from './About';

describe('About', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<About />);

    expect(asFragment()).toMatchSnapshot();
  });
});
