import { render } from 'utils';
import { TimerWidgetControls } from './TimerWidgetControls';

describe('TimerWidgetControls', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<TimerWidgetControls
      timerOn={true}
      time={0}
      startTimer={jest.fn()}
      stopTimer={jest.fn()}
      resetTimer={jest.fn()}
      resumeTimer={jest.fn()}
    />);

    expect(asFragment()).toMatchSnapshot();
  });
});
