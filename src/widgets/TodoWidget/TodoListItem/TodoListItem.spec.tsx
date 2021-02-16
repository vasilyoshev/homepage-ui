import { Todo } from 'interfaces';
import { render } from 'utils';
import { TodoListItem } from './TodoListItem';

describe('TodoListItem', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<TodoListItem toggleComplete={jest.fn()} todo={{} as Todo} />);
    expect(asFragment()).toMatchSnapshot();
  });
}); 
  

