// Returns number without decimal.  Does not round.

export function getLeftOfDecimal(number) {
	return number >> 0;
}
