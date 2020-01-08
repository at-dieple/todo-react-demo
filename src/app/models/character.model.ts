/** CharacterMVC model definitions **/

export interface CharacterModel {
  id?: number;
  text: string;
  completed?: boolean;
  [key: string]: any;
}

export namespace CharacterModel {
  export enum Filter {}
}
