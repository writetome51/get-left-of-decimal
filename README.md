# getLeftOfDecimal(number): number

Returns `number` without the decimal or anything   
to the right of it.  Does not round.

Examples:
```
getLeftOfDecimal(20.723); 
    // --> 20

getLeftOfDecimal(-20.723);
    // -->  -20

getLeftOfDecimal(1.012); 
    // --> 1

getLeftOfDecimal(1.999);
    // --> 1
```

## Installation
`npm i  @writetome51/get-left-of-decimal`

## Loading
```
// if using TypeScript:
import {getLeftOfDecimal} from '@writetome51/get-left-of-decimal'; 
// if using ES5 JavaScript:
var getLeftOfDecimal = require('@writetome51/get-left-of-decimal').getLeftOfDecimal;
```
