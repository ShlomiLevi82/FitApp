export interface User {
  _id: string;
  name: string;
  age: number;
  birthDate: number;
  email: string;
}

export interface FilterBy {
  term: string;
}
