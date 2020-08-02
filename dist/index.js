import { errorIfNotFiniteNumber } from 'error-if-not-finite-number';
// Returns number without decimal.  Does not round.
export function getLeftOfDecimal(number) {
    errorIfNotFiniteNumber(number);
    return number >> 0;
}
