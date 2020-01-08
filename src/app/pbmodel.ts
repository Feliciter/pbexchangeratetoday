export interface Pbmodel {
  date: Date;
  bank: string;
  baseCurrency: number;
  baseCurrencyLit: string;

  exchangeRate: {
    baseCurrency: string;
    currency: string;
    saleRateNB: string;
    purchaseRateNB: string;
    saleRate: number;
    purchaseRate: number;
  };
}
