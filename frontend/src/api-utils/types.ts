interface TrelloSubData {
  String: string;
  Valid: boolean;
}

interface TrelloPerson {
  ID: string;
  FbID: TrelloSubData;
  TgID: TrelloSubData;
  TrelloID: TrelloSubData;
  FirstName: TrelloSubData;
  LastName: TrelloSubData;
  Avatar: TrelloSubData;
  Roles: string[];
}

interface Resource {
  ID: string;
  Title: string
  DreamID: string;
  Dream: null;
  DreamStageID: string;
  DreamStage: {
    ID: string;
    Name: string;
    DreamID: string;
  },
  Status: 'complete' | 'incomplete'
}

export type TrelloProjectCardProps = {
  ID: string;
  TrelloID: string;
  Title: string;
  CoverImage: string;
  Description: string;
  OwnerID: string;
  Owner: TrelloPerson;
  ManagerID: string;
  Manager: TrelloPerson;
  Status: string;
  ShortLink: string;
  Resources: Resource[];
}
