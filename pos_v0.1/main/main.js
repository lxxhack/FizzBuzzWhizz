'use strict';

function stat(inputs)
{
var outputs=[];
var i=0,j=0;
do 
{
outputs[j]=inputs[i];
outputs[j].count=1;
i++
while (i<inputs.length&&outputs[j].barcode==inputs[i].barcode)
{
outputs[j].count++;
i++;
}
j++;
}
while(i<inputs.length);
return outputs;
}

function printReceipt(inputs) {
inputs=stat(inputs);
var sum=0;
var str='***<没钱赚商店>收据***\n';
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
