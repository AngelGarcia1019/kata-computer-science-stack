const Stack = require("./stack.js");

const displayRoute = (title, route) => {
  let routeData = "";
  const stackTmp = route.clone();
  while (!stackTmp.isEmpty()) {
    const isLast = route.size() == 1;
    routeData += `${stackTmp.pop()} ${isLast ? "" : "-> "}`;
  }
  console.log(title, routeData);
};

const routeOriginal = new Stack([
  "Pueblo Origen",
  "Pueblo 1",
  "Pueblo 2",
  "Destino",
]);
const routeFinal = routeOriginal.reverse();

displayRoute("Recorrido: ", routeFinal);
console.log("");
displayRoute("Regreso: ", routeOriginal);
