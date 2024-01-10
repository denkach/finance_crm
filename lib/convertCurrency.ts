export const convertCurrency = (amount: string | number) => {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(+amount);
}