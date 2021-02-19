import { render } from 'utils';
import { AddWidgetFab } from './AddWidgetFab';

describe('AddWidgetFab', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<AddWidgetFab />);

    expect(asFragment()).toMatchSnapshot();
  });
});
