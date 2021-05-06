import { render } from 'utils';
import { WeatherWidgetWarningAlert } from 'components';

describe('WeatherWidgetWarningAlert', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<WeatherWidgetWarningAlert message='text' />);

    expect(asFragment()).toMatchSnapshot();
  });
});
