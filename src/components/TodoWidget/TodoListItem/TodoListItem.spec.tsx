import { TodoListItem } from './TodoListItem';
import { render, screen } from 'utils';
import userEvent from '@testing-library/user-event';

const mockData = [{
  text: 'Walk the dog',
  complete: false,
}];
describe('TodoListItem', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<TodoListItem todo={mockData[0]} removeTodo={jest.fn()} toggleComplete={jest.fn()} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render todo item with checkbox and delete button', () => {
    render(<TodoListItem todo={mockData[0]} removeTodo={jest.fn()} toggleComplete={jest.fn()} />);
    const removeBtn = screen.getByTestId('removeTodoItem');
    const checkbox = screen.getByRole('checkbox', {name: /walk the dog/i});
    expect(checkbox).toBeInTheDocument();
    expect(removeBtn).toBeInTheDocument();
  });
  it('user can remove todo from list', () => {
    render(<TodoListItem todo={mockData[0]} removeTodo={jest.fn()} toggleComplete={jest.fn()} />);
    const removeBtn = screen.getByTestId('removeTodoItem');
    userEvent.type(removeBtn, 'Remove that todo');
    expect(screen.queryByText(/Remove that todo/i)).not.toBeInTheDocument();
  });
});
