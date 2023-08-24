// @ts-ignore
import Trello from "trello";

import { DreamModel, UserModel } from "../models";
import {DreamMapper, StepsMapper, UserMapper} from "../models/mappers";

import { config } from "../common/config";

const { TRELLO_BOARD_ID, TRELLO_APP_KEY, TRELLO_TOKEN } = config.trello;

const client = new Trello(TRELLO_APP_KEY, TRELLO_TOKEN);

export const getCardData = async (): Promise<any> => {
  try {
    const lists = await client.getListsOnBoard(TRELLO_BOARD_ID);
    const dreamUpdates: Promise<any>[] = [];

    for (const list of lists) {
      const listCards = await client.getCardsForList(list.id);

      const cardPromises = listCards.map(async (card: any) => {
        if (card.id && card.idMembers[0]) {
          const [member, cardCheckLists, attachments] = await Promise.all([
            client.getMember(card.idMembers[0]),
            client.getChecklistsOnCard(card.id),
            client.getAttachmentsOnCard(card.id)
          ]);

          const dream = new DreamMapper(card, list);
          const user = new UserMapper(member);
          const steps = cardCheckLists.map((cardCheckList: any) => new StepsMapper(cardCheckList));
          const coverImage = attachments[0].url;

          const updatedUser = await UserModel.findOneAndUpdate(
            { trelloId: user.trelloId },
            user,
            { upsert: true, new: true }
          );

          return DreamModel.findOneAndUpdate(
            { trelloId: dream.trelloId },
            {
              ...dream,
              ownerId: updatedUser._id,
              managerId: updatedUser._id,
              status: "test status",
              coverImage,
              steps,
            },
            { upsert: true, new: true }
          );
        }
        return null;
      });

      dreamUpdates.push(...cardPromises);
    }

    return await Promise.all(dreamUpdates);
  } catch (err) {
    console.error(err);
    return null;
  }
};
