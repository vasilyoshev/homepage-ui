import { render } from 'utils';
import { TodoWidget } from './TodoWidget';

describe('TodoWidget', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<TodoWidget />);
    expect(asFragment()).toMatchSnapshot();
  });
});
