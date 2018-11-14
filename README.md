To include:

import {getLeftOfDecimal} from '@writetome51/get-left-of-decimal';

// number cannot be of type string:  
getLeftOfDecimal(number): number

Without rounding, this function returns the number without the decimal or anything   
to the right of it.

Examples:

let n = getLeftOfDecimal(20.723); // n becomes 20

let n = getLeftOfDecimal(-20.723); // n becomes -20

let n = getLeftOfDecimal(1.012); // n becomes 1

let n = getLeftOfDecimal(1.999); // n becomes 1
