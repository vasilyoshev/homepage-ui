import { render } from 'utils';
import { CryptoCurrencySearchBar } from './CryptoCurrencyWidgetSearchBar';

describe('CryptoCurrencySearchBar', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<CryptoCurrencySearchBar type='text' placeholder='Search' onChange={jest.fn()} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
