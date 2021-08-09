import axios, { AxiosPromise } from "axios";
import { UserProps } from "./User";

// http://localhost:3000/users

export class Sync {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }
  save(data: UserProps): void {
    const { id } = data;

    if (id) {
      // put
      axios({
        baseURL: `${this.rootUrl}/${id}`,
        method: "PUT",
        data,
      });
    } else {
      //post
      axios({
        baseURL: `${this.rootUrl}`,
        method: "POST",
        data,
      });
    }
  }
}
