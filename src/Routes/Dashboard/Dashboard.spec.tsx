import { Dashboard } from './Dashboard';
import { render } from 'utils';

const realDate = Date.now;
describe('Dashboard', () => {
  beforeAll(() => {
    global.Date.now = jest.fn(() => 1628366059052);
  });
  it('renders successfully', () => {
    const { asFragment } = render(<Dashboard />);
    expect(asFragment()).toMatchSnapshot();
  });
  afterAll(() => {
    global.Date.now = realDate;
  });
});
