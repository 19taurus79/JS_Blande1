// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості. Функція повинна повернути масив усіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.
// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   let arr = [];
//   for (let i of products) {
//     for (key in i) {
//       if (key === propName) {
//         arr.push(i[key]);
//       }
//     }
//   }
//   return arr;
// }

function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  for (let product of products) {
    console.log(product);
  }
}

// Виклик getAllPropValues("name") повертає ["Radar", "Scanner", "Droid", "Grip"]
// Виклик getAllPropValues("quantity") повертає [4, 3, 7, 9]
// Виклик getAllPropValues("price") повертає [1300, 2700, 400, 1200]
// Виклик getAllPropValues("category") повертає []
// getAllPropValues("names");
// calculateTotalPrice("Droid");
function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  const cost = 0;
  for (product of products) {
    if (products.name === productName) {
      cost = products.price * products.quantity;
    }
  }
  if (cost > 0) {
    return cost;
  }
  return `Product ${productName} not found!`;
}

function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  let cost = 0;
  for (product of products) {
    if (product.name == productName) {
      cost = product.price * product.quantity;
    }
  }
  if (cost > 0) {
    return cost;
  }
  return `Product ${productName} not found!`;
}

calculateTotalPrice("Scanner");
