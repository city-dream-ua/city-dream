import { marked } from "marked";

export class DreamMapper {
  trelloId: string;
  title: string;
  shortLink: string;
  description: string;
  status: string;
  dreamStage: string;
  // ownerId;
  // owner;
  // managerid;

  constructor(card: any, list: any) {
    this.trelloId = card.id;
    this.title = card.name;
    this.shortLink = card.shortLink;
    this.description = marked(card.desc);
    this.status = list.name;
    this.dreamStage = list.name;
    // this.ownerId = card.ID;
    // this.owner = card;
    // this.managerid = card.ID; // Temporarily, as there are no fb users yet.
  }
}
