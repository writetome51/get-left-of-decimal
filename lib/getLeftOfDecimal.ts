import { errorIfNotNumber } from 'basic-data-handling/errorIfNotNumber';


// Returns number without decimal.  Does not round.

export function getLeftOfDecimal(number) {
	errorIfNotNumber(number);
	return number >> 0;
}
