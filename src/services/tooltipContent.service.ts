import { CardType } from "@/models/cardType";

export class TooltipContentService {
  static getContent(cardType: CardType) {
    const cardToScore: Map<CardType, string> = new Map()
      .set(
        "champagne",
        `
        <p><b>0</b> points if played by 1 player on a turn.</p>
        <p>
          <b>2</b> + the amount of champagnes played on a turn.
        </p>
        `
      )
      .set(
        "birthday",
        `
          <p>Pick a player.</p>
          <p>Their chosen card gets played by you.</p>
          <p>They play the top card from the deck.</p>
          <p>This card is discarded.</p>
        `
      )
      .set("pork", 1)
      .set("beef", 2);
    return cardToScore.get(cardType);
  }
}
