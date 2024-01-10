class average {
  constructor(a, b, c, d) {
    this.NoOfstudent = a;
    this.NoOfsub = b;
    this.total = c;
    this.presentDays = [];
  }
  setPresentDays(Days) {
    this.presentDays.push(Days);
  }
  GetPresentDays() {
    return this.presentDays;
  }

  Actionx() {
    console.log(`${this.presentDays}`);
    return console.log(`${Math.ceil(this.total / this.NoOfstudent)}`);
  }
}

const avg2 = new average(43, 5, 3234, 102);
avg2.setPresentDays(143);
avg2.setPresentDays(145);
avg2.setPresentDays(156);
console.log("total number days cls opens " + avg2.GetPresentDays());
console.log("no of the sectiong  " + avg2.GetPresentDays().length);
