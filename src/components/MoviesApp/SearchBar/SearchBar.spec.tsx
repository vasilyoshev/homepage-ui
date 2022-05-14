import { render } from 'utils';
import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<SearchBar />);

    expect(asFragment()).toMatchSnapshot();
  });
});
