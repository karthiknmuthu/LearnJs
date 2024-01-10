class Pizzaa {
  crustPizza = "original";
  #extra = "Myno";
  constructor(typePizza, sizePizza) {
    this.type = typePizza;
    this.size = sizePizza;
    this.toppings = "Cheese";
  }
  getToppings() {
    return this.toppings;
  }
  setToppings(Flavour) {
    this.toppings.push(Flavour);
  }
  bakes() {
    console.log(`${this.crustPizza}  ${this.type}  ${this.#extra}`);
  }
}
const dyPizza = new Pizzaa("margarita", "small");
dyPizza.bakes();
