import { render } from 'utils';
import { CryptoCurrencyTable } from './CryptoCurrencyTable';

describe('CryptoCurrencyTable', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<CryptoCurrencyTable coins={[]}/>);

    expect(asFragment()).toMatchSnapshot();
  });
});
