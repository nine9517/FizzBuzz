const Fizz = require('./FizzBuzz');

function testCase(text,val,toBe) {
    test(text, () => {
        expect(val).toBe(toBe);
    })
}

for (let i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        testCase('Send number 1-100 FizzBuzz',Fizz(i),"FizzBuzz");
    } else if (i % 3 == 0) {
        testCase('Send number 1-100 % 3',Fizz(i),"Fizz");
    }
    else if (i % 5 == 0) {
        testCase('Send number 1-100 % 5',Fizz(i),"Buzz");
    }
    else {
        testCase('Send number 1-100',Fizz(i),i);
    }
    
}




