import { render } from 'utils';
import { CryptoCurrencyTrackerWidget } from './CryptoCurrencyTrackerWidget';

describe('CryptoCurrencyTrackerWidget', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<CryptoCurrencyTrackerWidget />);
    
    expect(asFragment()).toMatchSnapshot();
  });
});
