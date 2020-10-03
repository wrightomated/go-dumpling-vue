import { CardType } from "./cardType";

export interface CardModel {
  type: CardType;
  id: number;
  offered?: boolean;
}
