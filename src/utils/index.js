/**
 * Format currency to users locale
 * @param {string} locale user's locale string.
 * @param {string} currencyCode currency code string.
 * @param {number} value value to be formatted.
 * @returns {string} The formatted currency.
 */
export function formatCurrency(currencyCode, value) {
  return new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: currencyCode,
    useGrouping: true,
    minimumFractionDigits: 2
  }).format(value);
}

/**
 * Append domain name to a relative path
 * @param {string} path relative path.
 * @returns {string} full path link.
 */
export function getFullLink(path) {
  return `https://www.holidu.com${path}`;
}
