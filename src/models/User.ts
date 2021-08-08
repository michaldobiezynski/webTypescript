interface UserProps {
  name: string;
  age: number;
}

export class User {
  constructor(private data: UserProps) {}

  get<K extends keyof UserProps>(propName: K): UserProps[K] {
    return this.data[propName];
  }
}
