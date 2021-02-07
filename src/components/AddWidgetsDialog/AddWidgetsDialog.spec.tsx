import { render } from 'utils';
import { AddWidgetsDialog } from './AddWidgetsDialog';

describe('AddWidgetsDialog', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<AddWidgetsDialog isOpen={true} onClose={() => null} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
