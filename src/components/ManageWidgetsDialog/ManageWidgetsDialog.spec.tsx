import { render } from 'utils';
import { ManageWidgetsDialog } from './ManageWidgetsDialog';

describe('ManageWidgetsDialog', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<ManageWidgetsDialog isOpen={true} onClose={() => null} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
