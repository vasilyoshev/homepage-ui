import { render } from 'utils';
import { WeatherWidgetLocationTable } from './WeatherWidgetLocationTable';

describe('WeatherWidgetLocationTable', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<WeatherWidgetLocationTable locations={[]} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
