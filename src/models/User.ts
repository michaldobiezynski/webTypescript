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
}
