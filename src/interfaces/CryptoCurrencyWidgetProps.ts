export interface CoinProps {
    name: string;
    image: string;
    symbol: string;
    marketcap: number;
    price: number;
    priceChange: number;
}
    
export interface CryptoCurrencyTrackerWidgetResProps {
    id: string;
    name: string;
    image: string;
    symbol: string;
    market_cap: number;
    current_price: number;
    price_change_percentage_24h: number;
}
