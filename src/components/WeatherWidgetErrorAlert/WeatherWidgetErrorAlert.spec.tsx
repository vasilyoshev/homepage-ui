import { render } from 'utils';
import { WeatherWidgetErrorAlert } from 'components';

describe('WeatherWidgetErrorAlert', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<WeatherWidgetErrorAlert message='text' />);

    expect(asFragment()).toMatchSnapshot();
  });
});
