"use strict";
// Returns num without decimal.  Does not round.
Object.defineProperty(exports, "__esModule", { value: true });
function getIntegerPart(num) {
    return num >> 0;
}
exports.getIntegerPart = getIntegerPart;
