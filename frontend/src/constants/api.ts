export enum ERequestMethod {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  UPDATE = 'UPDATE'
}

class TRELLO {
  //TODO: add correct url for updating dream
  public static readonly UPDATE_DREAM = '';
  public static readonly SYNC = '/export-trello';
}

export class Api {
  public static readonly trello = TRELLO;
}
