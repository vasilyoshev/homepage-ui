import { render } from 'utils';
import { WeatherWidgetLocationTable } from './WeatherWidgetLocationTable';

describe('WeatherWidgetLocationTable', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<WeatherWidgetLocationTable locations={[]} onSelect={jest.fn()} current={null} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
