import { render } from 'utils';
import { TodoList } from './TodoList';

describe('TodoList', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<TodoList todos={[]} toggleComplete={jest.fn()}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});

    

  
  

