import { render } from 'utils';
import { WeatherWidget } from './WeatherWidget';

describe('WeatherWidget', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<WeatherWidget />);

    expect(asFragment()).toMatchSnapshot();
  });
});
