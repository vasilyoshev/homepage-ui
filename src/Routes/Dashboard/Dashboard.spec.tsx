import { Dashboard } from './Dashboard';
import { render } from 'utils';

/* const realDate = Date.now;
beforeAll(() => {
  global.Date.now = jest.fn(() => 1628366059052);
});
afterAll(() => {
  global.Date.now = realDate;
}); */
describe('Dashboard', () => {

  it('renders successfully', () => {
    const mockDate = jest.spyOn(Date.prototype, 'toLocaleTimeString').mockReturnValue('2020-04-15');
    const { asFragment } = render(<Dashboard />);
    expect(asFragment()).toMatchSnapshot();
    mockDate.mockRestore();
  });

});
