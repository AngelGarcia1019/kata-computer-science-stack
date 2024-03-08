const Stack = require("./stack.js");

const replace = (data = [], nuevo, viejo) => {
  let stack = new Stack(data);

  while (!stack.isEmpty()) {
    const element = stack.pop();
    if (element == viejo) {
      stack.push(nuevo);
      break;
    }
  }
  stack.print();
};

replace([3, 2, 3, 4, 6, 8, 1, 2, 5, 5], 7, 2);
