import {getLeftOfDecimal} from './index.js';
// Test 1
let result = getLeftOfDecimal(11.000001);
if (result === 11)
	console.log('test 1 passed');
else
	console.log('test 1 FAILED');


// Test 2
result = getLeftOfDecimal(11.999999);
if (result === 11)
	console.log('test 2 passed');
else
	console.log('test 2 FAILED');


// Test 2A
result = getLeftOfDecimal(-11.999999);
if (result === -11)
	console.log('test 2A passed');
else
	console.log('test 2A FAILED');


// Test 3
result = getLeftOfDecimal(0.000001);
if (result === 0)
	console.log('test 3 passed');
else
	console.log('test 3 FAILED');


// Test 4
result = getLeftOfDecimal(-0.999999);
if (result === 0)
	console.log('test 4 passed');
else
	console.log('test 4 FAILED');


// Test 5
result = getLeftOfDecimal(9.0);
if (result === 9) console.log('test 5 passed');
else console.log('test 5 FAILED');


// Test 5A: make sure it doesn't error if passed an integer:
result = getLeftOfDecimal(9);
if (result === 9) console.log('test 5A passed');
else console.log('test 5A FAILED');


// Test 6
result = getLeftOfDecimal('1.999999999999999');
if (typeof result === 'number' && result === 1) console.log('test 6 passed');
else console.log('test 6 FAILED');


// Test 7
result = getLeftOfDecimal('-0.000000001');
if (typeof result === 'number' && result === 0) console.log('test 7 passed');
else console.log('test 7 FAILED');
