import { render } from 'utils';
import { CryptoCurrencyWidgetSearchBar } from './CryptoCurrencyWidgetSearchBar';

describe('CryptoCurrencyWidgetSearchBar', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<CryptoCurrencyWidgetSearchBar type='text' placeholder='Search' onChange={jest.fn()} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
