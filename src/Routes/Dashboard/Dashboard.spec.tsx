import { Dashboard } from './Dashboard';
import { render } from 'utils';
import MockDate from 'mockdate';

describe('Dashboard', () => {
  afterAll(() => MockDate.reset());
  it('renders successfully', () => {
    const { asFragment } = render(<Dashboard />);
    MockDate.set('2021');
    expect(asFragment()).toMatchSnapshot();
  });
});
