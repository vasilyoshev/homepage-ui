import { render } from 'utils';
import { CalendarWidget } from './CalendarWidget';

describe('CalendarWidget', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<CalendarWidget />);
  
    expect(asFragment()).toMatchSnapshot();
  });
});
