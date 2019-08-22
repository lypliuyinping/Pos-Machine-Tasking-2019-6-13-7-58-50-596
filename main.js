console.log(generatorPosReceipts(["0001", "0003", "0005", "0003"]));

function generatorPosReceipts(items) {
  let countArray = countItems(items);
  let itemsArray = getItems(countArray);
  let itemsPrice = calculate(itemsArray);
  let print = printF(itemsArray,itemsPrice);
  return print;
}
function countItems(itemsId) {
  let result = [];
  for (let i = 0; i < itemsId.length; i++) {
    let index = result.findIndex(element => itemsId[i] === element.id);
    if (index === -1) {
      result.push({
        id: itemsId[i],
        count: 1
      });
    } else {
      result[index].count++;
    }
  }
  return result;
}

function getItems(result) {
  const dbData = [
    { id: "0001", name: "Coca Cola", price: 3 },
    { id: "0002", name: "Diet Coke", price: 4 },
    { id: "0003", name: "Pepsi-Cola", price: 5 },
    { id: "0004", name: "Mountain Dew", price: 6 },
    { id: "0005", name: "Dr Pepper", price: 7 },
    { id: "0006", name: "Sprite", price: 8 },
    { id: "0007", name: "Diet Pepsi", price: 9 },
    { id: "0008", name: "Diet Mountain Dew", price: 10 },
    { id: "0009", name: "Diet Dr Pepper", price: 11 },
    { id: "0010", name: "Fanta", price: 12 }
  ];
  let items = [];
  for (let i = 0; i < dbData.length; i++) {
    for (let j = 0; j < result.length; j++)
      if (dbData[i].id == result[j].id) {
        items.push({
          name: dbData[i].name,
          count: result[j].count,
          price: dbData[i].price
        });
      }
  }
  return items;
}

function calculate(items) {
  let totalPrice=0;
  for (let i = 0; i < items.length; i++) {
     totalPrice+= items[i].count * items[i].price;
  } 
  return totalPrice;
}
function printF(items,totalPrice) {
  var print ="Receipts"+"\n------------------------------------------------------------\n"

  for (let i = 0; i < items.length; i++) {
      print+=items[i].name+"\t\t\t"+items[i].price+"\t\t\t"+items[i].count+"\n"
  }
   print +="------------------------------------------------------------\n"+"Price: "+totalPrice
   return print;
}
module.exports = {
  countItems,
  getItems,
  calculate,
  printF,
  generatorPosReceipts
};
