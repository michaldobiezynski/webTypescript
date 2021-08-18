import { UserProps, User } from "./../models/User";
import { View } from "./View";

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `   
    <div>
        <div "user-show"></div>
        <div class="user-form"></div>
    </div>
        `;
  }
}
