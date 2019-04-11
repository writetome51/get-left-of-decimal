"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_not_finite_number_1 = require("error-if-not-finite-number");
// Returns number without decimal.  Does not round.
function getLeftOfDecimal(number) {
    error_if_not_finite_number_1.errorIfNotFiniteNumber(number);
    return number >> 0;
}
exports.getLeftOfDecimal = getLeftOfDecimal;
