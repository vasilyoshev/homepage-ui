import { render } from 'utils';
import { CryptoCurrencyTrackerWidgetSearchBar } from './CryptoCurrencyTrackerWidgetSearchBar';

describe('CryptoCurrencyTrackerWidgetSearchBar', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<CryptoCurrencyTrackerWidgetSearchBar type='text' placeholder='Search' onChange={jest.fn()} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
