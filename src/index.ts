import { User } from "./models/User";

const user = new User({ name: "Michal", age: 27 });

user.on("change", () => {
  console.log("change #1");
});
user.on("change", () => {
  console.log("change #2");
});
user.on("save", () => {
  console.log("Save was triggered");
});

user.trigger("change");
user.trigger("save");
