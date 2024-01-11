//JSON Js Object NOtation
//test format
//to send receive data in many programing languages
const MyObj = {
  name: "Karthikeyan",
  MyProfile: ["skcet", "M.tech", "CSE"],
  sub: function () {
    console.log(`i am ${this.name} and i am studing in ${this.MyProfile}`);
  },
};
console.log(MyObj);
MyObj.sub();
const SendJson = JSON.stringify(MyObj);
console.log(SendJson);
const receiveJson = JSON.parse(SendJson);
console.log(receiveJson);
