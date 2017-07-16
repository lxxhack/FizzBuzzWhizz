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
function printText2(num,base,word) {
    let text = '';
    const a = base[0], b = base[1], c = base[2];
    if (num.toString().indexOf(a.toString())!=-1)
    {
      return word[0];
    }
    text=num%a==0?text+word[0]:text;
    text=num%b==0?text+word[1]:text;
    text=num%c==0?text+word[2]:text;
    return text;
}
