import axios, { AxiosPromise } from "axios";

// http://localhost:3000/users

interface HasId {
  id: number;
}

export class Sync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }
  save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      // put
      return axios({
        baseURL: `${this.rootUrl}/${id}`,
        method: "PUT",
        data,
      });
    } else {
      //post
      return axios({
        baseURL: `${this.rootUrl}`,
        method: "POST",
        data,
      });
    }
  }
}
