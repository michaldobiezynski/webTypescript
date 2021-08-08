import { User } from "./models/User";

const user = new User({ name: "Michal", age: 27 });

console.log(user.get("name"));
console.log(user.get("age"));
