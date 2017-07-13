'use strict';
function statistics(inputs) {
    var outputs = [], index = 0, count, i = 0;
    do
    {
        outputs[index] = {};
        outputs[index].barcode = inputs[i].split('-')[0];
        count = 0;
        do
        {
            if (inputs[i].indexOf('-') != -1)
                count += parseFloat(inputs[i].split('-')[1]);
            else
                count = count + 1;
            i++;
            if (i < inputs.length && outputs[index].barcode == inputs[i].split('-')[0])
                continue;
            outputs[index].count = count;
            index++;
            break;
        } while (i < inputs.length);
    } while (i < inputs.length);
    return outputs;
}

function buildSheet(inputs) {
    var goods = loadAllItems();
    var outputs = [];
    for (var i = 0; i < inputs.length; i++) {
        for (var j = 0; j < goods.length; j++) {
            if (inputs[i].barcode == goods[j].barcode) {
                outputs[i] = goods[j];
                outputs[i].count = inputs[i].count;
                break;
            }
        }
    }
    return outputs;
}

function getSave(input) {
    var items = loadPromotions();
    var save = 0;
    for (var item of items) {
        if (item.type == 'BUY_TWO_GET_ONE_FREE') {
            var promotion = item.barcodes;
            break;
        }
    }
    if (promotion.indexOf(input.barcode) != -1) {
        save = Math.floor(input.count / 3) * input.price;
    }
    return save;
}

function buildOrder(inputs) {
    var total = 0, save = 0;
    for (var i = 0; i < inputs.length; i++) {
        var total = inputs[i].price * inputs[i].count;
        save = getSave(inputs[i]);
        total -= save;
        inputs[i].total = total;
        inputs[i].save = save;
    }
    return inputs;
}

function getSum(inputs) {
    var sum = 0;
    for (var item of inputs)
        sum += item.total;
    return sum;
}

function getTotalSave(inputs) {
    var total_save = 0;
    for (var item of inputs)
        total_save += item.save;
    return total_save;
}
function printReceipt(inputs) {
    inputs = statistics(inputs);
    inputs = buildSheet(inputs);
    inputs = buildOrder(inputs);
    var sum = getSum(inputs);
    var total_save = getTotalSave(inputs);
    var str = '***<没钱赚商店>收据***\n';
    for (var i = 0; i < inputs.length; i++) {
        str += `名称：${inputs[i].name}，数量：${inputs[i].count}${inputs[i].unit}，单价：${inputs[i].price.toFixed(2)}(元)，小计：${inputs[i].total.toFixed(2)}(元)\n`;
    }
    str += `----------------------
总计：${sum.toFixed(2)}(元)
节省：${total_save.toFixed(2)}(元)
**********************`;
    console.log(str);
}
