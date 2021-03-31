import { render } from 'utils';
import { CryptoCurrencyTableMobile } from './CryptoCurrencyTableMobile';

describe('CryptoCurrencyTableMobile', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<CryptoCurrencyTableMobile coins={[]} />);
    
    expect(asFragment()).toMatchSnapshot();
  });
});
