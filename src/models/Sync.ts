import axios, { AxiosResponse } from "axios";

export class Sync {
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
