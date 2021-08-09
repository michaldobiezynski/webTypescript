import { User } from "./models/User";

const user = new User({ name: "new record", age: 0 });

user.events.on("change", () => {
  console.log("blabla");
});
user.events.trigger("change");

user.save();
