import { render } from 'utils';
import { WeatherWidgetSummary } from 'components';

describe('WeatherWidgetSummary', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<WeatherWidgetSummary location={null}/>);

    expect(asFragment()).toMatchSnapshot();
  });
});
