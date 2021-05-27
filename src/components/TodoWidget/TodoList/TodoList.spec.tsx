import { TodoList } from './TodoList';
import { render, screen } from 'utils';

const mockData = [{
  text: 'Walk the dog',
  complete: false,
},
{
  text: 'Make app',
  complete: false,
}];
describe('TodoList', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<TodoList todos={[]} toggleComplete={jest.fn()} removeTodo={jest.fn()}/>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should show list of todos', () => {
    render(<TodoList todos={mockData} toggleComplete={jest.fn()} removeTodo={jest.fn()} />);
    mockData.forEach((todo) => {
      expect(screen.getByText(todo.text)).toBeInTheDocument();
    });
  });
});
