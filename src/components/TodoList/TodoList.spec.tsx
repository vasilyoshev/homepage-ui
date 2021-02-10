import { render } from 'utils';
import { TodoList } from './TodoList';

describe('TodoList', () => {
  it('renders successfully', () => {
    const todos = [{id: '1', text: 'Feed the cat'}];
    const { asFragment } = render(<TodoList items={todos} />);
  
    expect(asFragment()).toMatchSnapshot();
  });
});

