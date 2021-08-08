import { User } from "./models/User";

const user = new User({ name: "Michal", age: 27 });

user.set({ name: "Bogdan", age: 88 });
user.set({ name: "BlaBlaBla" });

console.log(user.get("name"));
console.log(user.get("age"));
