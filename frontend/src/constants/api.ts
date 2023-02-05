export enum ERequestMethod {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  UPDATE = 'UPDATE'
}

class TRELLO {
  public static readonly UPDATE_DREAM = '/dreams/[:id]/contribute';
  public static readonly SYNC = '/export-trello';
}

export class Api {
  public static readonly trello = TRELLO;
}
