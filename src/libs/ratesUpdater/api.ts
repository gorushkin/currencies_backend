import { CURRENCY, Rates, currencies } from '.';

const getApiUrl = (currency: CURRENCY, baseCurrency: CURRENCY = CURRENCY.RUB) =>
  `https://api.coingate.com/v2/rates/merchant/${currency}/${baseCurrency}`;

export const getCurrencyRate = async (currency: CURRENCY): Promise<string> => {
  try {
    const response = await fetch(getApiUrl(currency));
    const data = (await response.json()) as string;
    return data;
  } catch (error) {
    return 'null';
  }
};

export const getRates = async () => {
  const promises = currencies.map(async (currency) => {
    const rate = await getCurrencyRate(currency);
    return { rate, currency };
  });

  const resolvedPromises = await Promise.all(promises);

  const result = resolvedPromises.reduce<Rates>(
    (acc, { currency, rate }) => ({ ...acc, [currency]: rate }),
    {} as Rates,
  );

  return result;
};
