import { render } from 'utils';
import { Coin } from './Coin';

describe('Coin', () => {
  it('renders successfully', () => {
    const { asFragment } = render(<Coin 
      name='str' 
      image='str' 
      symbol='str' 
      marketcap={0} 
      price={0} 
      priceChange={0} 
      volume={0}/>);
    
    expect(asFragment()).toMatchSnapshot();
  });
});
