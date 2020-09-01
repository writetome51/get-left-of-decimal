# getLeftOfDecimal(number): number

Returns `number` without the decimal or anything to the right of it.  Does not round.

Examples:
```js
getLeftOfDecimal(11.000001);
// -->  11

getLeftOfDecimal(11.999999);
// -->  11

getLeftOfDecimal(-11.999999);
// -->  -11

getLeftOfDecimal(0.000001);
// -->  0

getLeftOfDecimal(-0.999999);
// -->  0

getLeftOfDecimal('1.999999999999999');
// -->  1

getLeftOfDecimal('-0.000000001');
// -->  0

let result = getLeftOfDecimal('1.99999');
console.log(typeof result);
// 'number'
```

## Installation
`npm i  @writetome51/get-left-of-decimal`

## Loading
```js
import {getLeftOfDecimal} from '@writetome51/get-left-of-decimal';
```
