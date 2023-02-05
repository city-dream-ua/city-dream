import { Api, ERequestMethod } from '@/constants';
import { addApiBase, setToken } from '@/api-utils/helpers';

const updateDream = (token: string, data: any): Promise<Response> => {
  return fetch(addApiBase(Api.trello.UPDATE_DREAM), {
    body: JSON.stringify(data),
    method: ERequestMethod.POST,
    headers: { ...setToken(token) },
  });
};

const syncTrello = (token: string): Promise<Response> => {
  return fetch(addApiBase(Api.trello.SYNC), {
    method: ERequestMethod.POST,
    headers: {
      ...setToken(token),
    },
  });
};

export class TrelloAPI {
  public static readonly sync = syncTrello;
  public static readonly updateDream = updateDream;
}
