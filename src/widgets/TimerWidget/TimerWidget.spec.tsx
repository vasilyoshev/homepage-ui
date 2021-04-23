import { render } from 'utils';
import { TimerWidget } from './TimerWidget';

describe('TimerWidget', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<TimerWidget />);

    expect(asFragment()).toMatchSnapshot();
  });
});
