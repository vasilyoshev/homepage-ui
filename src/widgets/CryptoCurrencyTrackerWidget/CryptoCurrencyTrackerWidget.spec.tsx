import { render, screen, fireEvent } from 'utils';
import { CryptoCurrencyTrackerWidget } from './CryptoCurrencyTrackerWidget';

describe('CryptoCurrencyTrackerWidget', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<CryptoCurrencyTrackerWidget />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should display currency searched by the user', async() => {
    render(<CryptoCurrencyTrackerWidget />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'bitcoin'}});
    expect(input.value).toBe('bitcoin');
    const element = await screen.findByText(/bitcoin/i);
    expect(element).toBeInTheDocument();
  });
});
