interface UserProps {
  name?: string;
  age?: number;
}

type Callback = () => {};

export class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get<K extends keyof UserProps>(propName: K): UserProps[K] {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback) {}
}
