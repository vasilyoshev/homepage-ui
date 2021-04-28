import { render } from 'utils';
import { WeatherWidgetWarningAlert, WeatherWidgetErrorAlert } from 'components';

describe('WeatherWidgetWarningAlert', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<WeatherWidgetWarningAlert message='message'/>);

    expect(asFragment()).toMatchSnapshot();
  });
});

describe('WeatherWidgetErrorAlert', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<WeatherWidgetErrorAlert message='message'/>);

    expect(asFragment()).toMatchSnapshot();
  });
});

