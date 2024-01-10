console.log(Math.PI);
console.log(Math.trunc(Math.PI));
console.log(Math.round(55.5));
console.log(Math.ceil(44.2));
console.log(Math.floor(88.9));
console.log(Math.pow(5, 2));
Myrandom = Math.random() * 32;
console.log(Math.floor(Myrandom) + 1);
let name = "Karthikeyan";
let len = name.length;
console.log(len);
console.log(name.charAt(Math.floor(Math.random() * len)));
let viwer = "muruga i need job in tcs pls give me";
let muruga;
if (viwer) {
  muruga = "i will give you";
  console.log(muruga);
} else {
  console.log("pls muruga");
}
let my = prompt("Enter your name");
if (my === null) {
  console.log("you didnt enter your name");
} else if (my.length) {
  console.log("youru name is " + my);
  console.log(my.trim().length);
} else {
  console.log("you didnt enter your name");
}
let number = 0;
let res = 0;

while (number < 5) {
  res += number;
  number++;

  console.log(res);
}
function sum(num1, num2) {
  return num1 + num2;
}
console.log("the sum is " + sum(10, 23));
console.log("the sum is " + sum(10, 93));
console.log("the sum is " + sum(10, 3));
console.log("the son of " + sum("Karthikeyan", "Muthu"));
function getUserName(email) {
  return email.slice(0, email.indexOf("@"));
}
console.log("The UserName is " + getUserName("Mkarthikeyanmuthu@gmail.com"));
console.log("The UserName is " + getUserName("19epci014@skcet.ac.in"));
console.log("The UserName is " + getUserName("mkarthikn0@gmail.com"));
function ConvertPropperCase(Words) {
  return Words.charAt(0).toUpperCase() + Words.slice(1).toLowerCase;
}
console.log(
  "The Propper case of give wormd is " + ConvertPropperCase("karthikeyan")
);
const Myobj = {
  Pizza: "crust",
  szie: "Large",
  extras: "chess",
};
console.log(Myobj.Pizza);
const Dominos = Object.create(Myobj);
console.log(Dominos.Pizza);
Dominos.PlsCanDo = 2;
console.log(Dominos.PlsCanDo);
const Myobj1 = {
  NoOfStudents: 32,
  NoOfSub: 5,
  TotalOfAll: 1023,
  Myobj2: {
    NoOfPass: 30,
    NoofFail: 2,
  },
  Action: function () {
    return console.log(
      `The students in the class ${
        this.NoOfStudents
      } and no of the student pass in the class ${
        this.Myobj2.NoOfPass
      } and no the fail student ${
        this.Myobj2.NoofFail
      } and the averge is ${Math.ceil(this.TotalOfAll / this.NoOfStudents)}`
    );
  },
};
console.log(Myobj1.Action());
//destructuring
const { NoOfStudents: students } = Myobj1;
class meta {
  constructor() {
    this.NoOfstudent = 32;
    this.NoOfsub = 5;
    this.total = 1023;
  }
  Actionx() {
    let avg = `${Math.ceil(this.total / this.NoOfstudent)}`;
    return "the average is" + avg;
  }
}
const tew = new meta();
