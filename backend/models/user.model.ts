import { Types } from "mongoose";
import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({ schemaOptions: { collection: 'users' } })
export class User {
  @prop({ id: true })
  id!: Types.ObjectId;

  @prop()
  fbId?: string;

  @prop()
  trelloId?: string;

  @prop()
  firstName?: string;

  @prop()
  lastName?: string;

  @prop()
  avatar?: string;

  @prop({ type: () => [String] })
  roles?: string[];
}

export const UserModel = getModelForClass(User);
