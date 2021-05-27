import { AddTodoForm } from './AddTodoForm';
import { render, screen } from 'utils';
import userEvent from '@testing-library/user-event';

describe('AddTodoForm', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<AddTodoForm addTodo={(str: string) => {str;}} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render empty input field', () => {
    render(<AddTodoForm addTodo={jest.fn()} />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toBeEmptyDOMElement();
  });
  it('should render button with name add todo', () => {
    render(<AddTodoForm addTodo={jest.fn()} />);
    const btn = screen.getByRole('button', {name: /add todo/i});
    expect(btn).toBeInTheDocument();
  });
  it('user can add some text', () => {
    render(<AddTodoForm addTodo={jest.fn()} />);
    const input = screen.getByRole('textbox');
    const btn = screen.getByRole('button', {name: /add todo/i});
    userEvent.click(btn);
    userEvent.type(input, 'todo task');
    expect(input).toHaveValue('todo task');
    expect(input).toBeEmptyDOMElement();
  });
});
