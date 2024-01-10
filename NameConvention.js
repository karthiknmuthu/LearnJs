//to keep the parameters safe factory function should be used
function pizzaFactory(sizePizza) {
  const crust = "original";
  const size = sizePizza;
  return {
    bake: () => console.log(`Baking a ${size} ${crust} crust pizza`),
  };
}
const myPizza = pizzaFactory("large");
myPizza.bake();
console.log(myPizza.crust);
