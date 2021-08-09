import axios, { AxiosResponse } from "axios";

import { Eventing } from "./Eventing";

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  public events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  get<K extends keyof UserProps>(propName: K): UserProps[K] {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get("id")}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  save(): void {
    const id = this.get("id");
    console.log("id", id);

    if (id) {
      // put
      axios({
        baseURL: `http://localhost:3000/users/${id}`,
        method: "PUT",
        data: this.data,
      });
    } else {
      //post
      axios({
        baseURL: `http://localhost:3000/users`,
        method: "POST",
        data: this.data,
      });
    }
  }
}
