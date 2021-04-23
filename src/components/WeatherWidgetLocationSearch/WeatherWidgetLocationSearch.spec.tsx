import { render } from 'utils';
import { WeatherWidgetLocationSearch } from './WeatherWidgetLocationSearch';

describe('WeatherWidgetLocationSearch', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<WeatherWidgetLocationSearch onSearch={jest.fn()} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
