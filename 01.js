const Stack = require("./stack.js");

const displayNumbers = (data = [], limit = 0) => {
  let stack = new Stack(data);
  const size = stack.size();
  const pops = size - limit;

  for (let i = 0; i < pops; i++) {
    stack.pop();
  }

  stack.print();
};

displayNumbers(
  ["Manzana", "Cebolla", "Apio", "Naranja", "Papaya", "Sandía", "Melón"],
  4
);
