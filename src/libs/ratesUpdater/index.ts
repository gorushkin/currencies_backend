import { getRates } from './api';

export enum CURRENCY {
  EUR = 'EUR',
  USD = 'USD',
  NZD = 'NZD',
  RUB = 'RUB',
  TRY = 'TRY',
}

export type Rates = Record<CURRENCY, string>;

export const currencies = Object.values(CURRENCY);

const UPDATE_TIMEOUT = 1000 * 60;

class RatesUpdater {
  private requestDate: string = '';
  isFirstRun = true;
  private ratesData: Rates = {
    [CURRENCY.EUR]: '',
    [CURRENCY.USD]: '',
    [CURRENCY.NZD]: '',
    [CURRENCY.RUB]: '',
    [CURRENCY.TRY]: '',
  };

  constructor() {
    if (this.isFirstRun) this.updateRates();
    this.isFirstRun = false;
  }

  private updateRates = async () => {
    this.ratesData = await getRates();
    this.requestDate = new Date().toISOString();
    setTimeout(this.updateRates, UPDATE_TIMEOUT * 10);
  };

  getRates = () => {
    return { rates: this.ratesData, date: this.requestDate };
  };
}

export const updater = new RatesUpdater();
