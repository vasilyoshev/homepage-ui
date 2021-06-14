import { render } from 'utils';
import { AddTodoForm } from './AddTodoForm';

describe('AddTodoForm', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<AddTodoForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});
