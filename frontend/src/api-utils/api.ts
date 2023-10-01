import { Api, ERequestMethod } from '@/constants';
import { addApiBase, setToken } from '@/api-utils/helpers';

const updateDream = (token: string, id: string, data: { contribution: string; }): Promise<Response> => {
  return fetch(addApiBase(Api.trello.UPDATE_DREAM).replace('[:id]', id), {
    body: JSON.stringify(data),
    method: ERequestMethod.POST,
    headers: { ...setToken(token) },
  });
};

const syncTrello = (token: string): Promise<Response> => {
  return fetch(addApiBase(Api.trello.SYNC), {
    method: ERequestMethod.POST,
    headers: { ...setToken(token) },
  });
};

export class TrelloAPI {
  public static readonly sync = syncTrello;
  public static readonly updateDream = updateDream;
}
