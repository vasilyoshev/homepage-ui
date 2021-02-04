import { render } from 'utils';
import { Header } from './Header';

describe('Header', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<Header />);

    expect(asFragment()).toMatchSnapshot();
  });
});
