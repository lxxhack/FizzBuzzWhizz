'use strict';

describe('pos', () => {

    it('should print text', () => {
        const tags = [
            'ITEM000003-2.5',
            'ITEM000005-4',
            'ITEM000005-2',
        ];
        const expectText = [
            {barcode: 'ITEM000003', count: 2.5},
            {barcode: 'ITEM000005', count: 6},
        ];
        expect(statistics(tags)).toEqual(expectText);
    });

    it('should print text', () => {
        const tags = [
            {barcode: 'ITEM000003', count: 2.5},
            {barcode: 'ITEM000005', count: 3},
        ];
        const expectText = [
            {
                barcode: 'ITEM000003',
                name: '荔枝',
                unit: '斤',
                price: 15,
                count: 2.5
            },
            {
                barcode: 'ITEM000005',
                name: '方便面',
                unit: '袋',
                price: 4.5,
                count: 3
            }];
        expect(buildSheet(tags)).toEqual(expectText);
    });

    it('should print text', () => {
        const tags = [
            {
                barcode: 'ITEM000003',
                name: '荔枝',
                unit: '斤',
                price: 15,
                count: 2.5
            },
            {
                barcode: 'ITEM000005',
                name: '方便面',
                unit: '袋',
                price: 4.5,
                count: 3
            }
        ];
        const expectText = [
            {
                barcode: 'ITEM000003',
                name: '荔枝',
                unit: '斤',
                price: 15,
                count: 2.5,
                total: 37.5,
                save: 0
            },
            {
                barcode: 'ITEM000005',
                name: '方便面',
                unit: '袋',
                price: 4.5,
                count: 3,
                total: 9,
                save: 4.5
            }];
        expect(buildOrder(tags)).toEqual(expectText);
    });

    it('should print text', () => {

        const tags = [
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000003-2.5',
            'ITEM000005',
            'ITEM000005-2',
        ];

        spyOn(console, 'log');

        printReceipt(tags);

        const expectText = `***<没钱赚商店>收据***
名称：雪碧，数量：3瓶，单价：3.00(元)，小计：6.00(元)
名称：荔枝，数量：2.5斤，单价：15.00(元)，小计：37.50(元)
名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)
----------------------
总计：52.50(元)
节省：7.50(元)
**********************`;

        expect(console.log).toHaveBeenCalledWith(expectText);
    });
});
