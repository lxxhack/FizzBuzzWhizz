'use strict';

function printReceipt(inputs) {
var str='***<没钱赚商店>收据***\n';
var sum=0;
for (var i=0;i<inputs.length;i++)
{
var count=inputs[i].price*inputs[i].count;
sum+=count;
str+=`名称：${inputs[i].name}，数量：${inputs[i].count}${inputs[i].unit}，单价：${inputs[i].price.toFixed(2)}(元)，小计：${count.toFixed(2)}(元)\n`;
}
str+=`----------------------
总计：${sum.toFixed(2)}(元)
**********************`;
console.log(str);
}
