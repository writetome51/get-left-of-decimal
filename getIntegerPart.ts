// Returns num without decimal.  Does not round.

export function getIntegerPart(num): number {
	return num >> 0;
}