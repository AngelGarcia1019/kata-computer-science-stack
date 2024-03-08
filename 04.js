const Stack = require("./stack.js");

const generateContainer = (n) => {
  let containers = [];
  for (let id = 1; id <= n; id++) {
    containers.push({
      id,
      label: "Container " + id,
    });
  }
  return containers;
};

const removeContainer = (n, id) => {
  const stackContainers = new Stack(generateContainer(n));
  stackContainers.print();
  let stackTMP = new Stack([]);
  while (!stackContainers.isEmpty()) {
    const container = stackContainers.pop();
    if (container.id == id) break;
    stackTMP.push(container);
  }

  while (!stackTMP.isEmpty()) {
    stackContainers.push(stackTMP.pop());
  }
  stackContainers.print();
};

removeContainer(10, 1);
