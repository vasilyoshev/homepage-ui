import { render } from 'utils';
import { CryptoCurrencyTracker } from './CryptoCurrencyTracker';

describe('CryptoCurrencyTracker', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<CryptoCurrencyTracker />);
    
    expect(asFragment()).toMatchSnapshot();
  });
});
