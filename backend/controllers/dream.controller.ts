import {DreamDto} from "../dto";
import {DreamModel} from "../models";
import {HttpError} from "../common/errors";

import {StatusCodes} from "../types";

export const getDream = async (shortLink: string) => {
  const dream = await DreamModel.findOne({ shortLink }).populate('managerId').exec();

  if (!dream) {
    throw new HttpError(StatusCodes.NOT_FOUND, "Dream not found!");
  }

  return new DreamDto(dream);
}

export const getAllDreams = async () => {
  const dreams = await DreamModel.find({ dreamStage: "In Progress" }).populate('managerId').exec();

  if (!dreams || dreams.length === 0) {
    throw new HttpError(StatusCodes.NOT_FOUND, "There is no available dreams!");
  }

  return dreams.map(dream => new DreamDto(dream));
}
