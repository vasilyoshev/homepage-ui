import { render } from 'utils';
import { CryptoCurrencyTrackerWidgetInfo } from './CryptoCurrencyTrackerWidgetInfo';

describe('CryptoCurrencyTrackerWidgetInfo', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<CryptoCurrencyTrackerWidgetInfo coins={[]} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
