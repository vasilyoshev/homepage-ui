import { render } from 'utils';
import { AddWidgetTooltip } from './AddWidgetTooltip';

describe('AddWidgetTooltip', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<AddWidgetTooltip />);

    expect(asFragment()).toMatchSnapshot();
  });
});
