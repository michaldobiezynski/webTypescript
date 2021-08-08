import { User } from "./models/User";

const user = new User({ name: "Michal", age: 27 });

user.on("change", () => {
  console.log("change");
});
user.on("change", () => {
  console.log("change");
});

console.log(user);
