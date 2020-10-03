import { PlayerTableModel } from "./playerTableModel";

export interface TableModel {
  players: PlayerTableModel[];
  round: number;
  deckSize: number;
  discardSize: number;
}
