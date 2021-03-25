import { render } from 'utils';
import { CryptoCurrencyTrackerWidget } from './CryptoCurrencyTableMobile';

describe('CryptoCurrencyTableMobile', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<CryptoCurrencyTableMobile />);
    
    expect(asFragment()).toMatchSnapshot();
  });
});
