"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

// Returns num without decimal.  Does not round.

function getLeftOfDecimal(num) {
	return num >> 0;
}

exports.getIntegerPart = getLeftOfDecimal;
