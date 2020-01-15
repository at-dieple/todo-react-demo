export interface TodoModel {
  id?: number;
  text: string;
  completed?: boolean;
  [key: string]: any;
}

export namespace TodoModel {
  export enum Filter {}
}
