import { CardModel } from "./cardModel";

export interface PlayerTableModel {
  playArea: CardModel[];
  playerName: string;
  playerScore: number;
}
