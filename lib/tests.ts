import { getLeftOfDecimal } from './getLeftOfDecimal';


// Test 1
let result = getLeftOfDecimal(11.00022);
if (result === 11) console.log('test 1 passed');
else console.log('test 1 FAILED');

// Test 2
result = getLeftOfDecimal(110.999);
if (result === 110) console.log('test 2 passed');
else console.log('test 2 FAILED');

// Test 2A
result = getLeftOfDecimal(-110.999);
if (result === -110) console.log('test 2A passed');
else console.log('test 2A FAILED');

// Test 3
result = getLeftOfDecimal(0.0);
if (result === 0) console.log('test 3 passed');
else console.log('test 3 FAILED');

// Test 4
result = getLeftOfDecimal(9);
if (result === 9) console.log('test 4 passed');
else console.log('test 4 FAILED');

// Test 5
result = getLeftOfDecimal(9.0);
if (result === 9) console.log('test 5 passed');
else console.log('test 5 FAILED');

// Test 6
let errorTriggered = false;
try {
	result = getLeftOfDecimal('0');
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 6 passed');
else console.log('test 6 FAILED');


// Test 7
errorTriggered = false;
try {
	result = getLeftOfDecimal('');
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 7 passed');
else console.log('test 7 FAILED');


// Test 8
errorTriggered = false;
try {
	result = getLeftOfDecimal(' ');
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 8 passed');
else console.log('test 8 FAILED');
