import { CardType } from "@/models/cardType";

export class TooltipContentService {
  static getContent(cardType: CardType) {
    const cardToScore: Map<CardType, string> = new Map()
      .set(
        "champagne",
        `
        <p><b>0</b> points if played by only one player this turn.</p>
        <p>
          Otherwise gain points worth <span style="color:#1bb683; font-weight:bold">2x</span> the champagnes played on this turn.
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
      .set(
        "pork",
        `
          <p><span style="color:#1bb683; font-weight:bold">1</span> point</p>
          <p>At the end of the round get <span style="color:#1bb683; font-weight:bold">4</span> points if you have at least one pork, beef and prawn dumpling.</p>
          <p>The player with the most <b>pork</b> dumplings at the end of round 3 gets <span style="color:#1bb683; font-weight:bold">3</span> points.</p>
        `
      )
      .set(
        "beef",
        `
          <p><span style="color:#1bb683; font-weight:bold">2</span> points</p>
          <p>At the end of the round get <span style="color:#1bb683; font-weight:bold">4</span> points if you have at least one pork, beef and prawn dumpling.</p>
          <p>The player with the most <b>beef</b> dumplings at the end of round 3 gets <span style="color:#1bb683; font-weight:bold">6</span> points.</p>
        `
      )
      .set(
        "prawn",
        `
          <p><span style="color:#1bb683; font-weight:bold">3</span> points</p>
          <p>At the end of the round get <span style="color:#1bb683; font-weight:bold">4</span> points if you have at least one pork, beef and prawn dumpling.</p>
          <p>The player with the most <b>prawn</b> dumplings at the end of round 3 gets <span style="color:#1bb683; font-weight:bold">9</span> points.</p>
        `
      )
      .set(
        "chilli",
        `
          <p><span style="color:#1bb683; font-weight:bold">2</span> points</p>
          <p>If you have played a bowl previously gain <span style="color:#1bb683; font-weight:bold">2</span> additional points per pork, beef and prawn dumpling played after this. Only works once per round.</p>
        `
      )
      .set(
        "vinegar",
        `
          <p><span style="color:#1bb683; font-weight:bold">3</span> points</p>
          <p>If you have played a bowl previously gain <span style="color:#1bb683; font-weight:bold">1</span> additional point per pork, beef and prawn dumpling played after this. Only works once per round.</p>
        `
      )
      .set(
        "ice",
        `
          <p><span style="color:#1bb683; font-weight:bold">1</span> point</p>
          <p>If this is the last card you play in a round loose <span style="color:#f9646e; font-weight:bold">5</span> points instead.</p>
        `
      )
      .set(
        "bowl",
        `
          <p><b>0</b> points</p>
          <p>Can hold condiments to get extra tasty dumplings.</p>
        `
      )
      .set(
        "puddin",
        `
          <p><b>0</b> points</p>
          <p>The player with the least puddins at the end of round 3 loses <span style="color:#f9646e; font-weight:bold">12</span> points.</p>
          <p>Every three puddins at the end of round three is worth <span style="color:#1bb683; font-weight:bold">6</span> points.</p>
        `
      );
    return cardToScore.get(cardType);
  }
}
