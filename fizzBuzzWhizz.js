'use strict';
function printText(num) {
    let text = '';
    const a = 3, b = 5, c = 7;
    if (num.toString().indexOf(a)!=-1)
        return 'fizz';
    text=num%a==0?text+'fizz':text;
    text=num%b==0?text+'Buzz':text;
    text=num%c==0?text+'Whizz':text;
    return text;
}
