"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotNumber_1 = require("basic-data-handling/errorIfNotNumber");
// Returns number without decimal.  Does not round.
function getLeftOfDecimal(number) {
    errorIfNotNumber_1.errorIfNotNumber(number);
    return number >> 0;
}
exports.getLeftOfDecimal = getLeftOfDecimal;
