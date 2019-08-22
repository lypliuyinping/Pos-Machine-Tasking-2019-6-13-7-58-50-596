'use strict';

const {countitems,getItems,calculate,print,generatorPosReceipts} = require("../main")
it ('should check if parmarters is pass', () => {
//given
const barcodes = ['0005','0003'];

//when
const result = calculate(barcodes);
//then
expect(result).toBe(true);
});