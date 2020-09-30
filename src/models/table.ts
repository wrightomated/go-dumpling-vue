export interface Table {
  players: PlayerOverview[];
  round: number;
  deckSize: number;
  discardSize: number;
}

interface PlayerOverview {
  playArea: Card[];
  playerName: string;
  playerScore: number;
}

interface Card {
  type: string;
  id: number;
  offered?: boolean;
}
