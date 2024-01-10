class Pizza {
  constructor(typePizza, sizePizza) {
    this.type = typePizza;
    this.size = sizePizza;
    this.crustPizza = "original";
    this.toppings = "Cheese";
  }
  getToppings() {
    return this.toppings;
  }
  setToppings(Flavour) {
    this.toppings.push(Flavour);
  }
}
const MyPizza = new Pizza();

class specialPizza extends Pizza {
  constructor(typePizza, sizePizza) {
    super(typePizza, sizePizza);
    this.Address = "Tiruppur North";
  }
  Order() {
    console.log(
      `Your order is ${this.type},${this.size} the crust is ${this.crustPizza} with extra topping of ${this.toppings} and Your order delivery address is ${this.Address}`
    );
  }
}
const splPizza = new specialPizza("Margarita", "Large");
splPizza.Order();
