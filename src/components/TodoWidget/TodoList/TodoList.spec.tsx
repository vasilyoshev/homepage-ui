import { render } from 'utils';
import { TodoList } from './TodoList';

describe('TodoList', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
  });
});
