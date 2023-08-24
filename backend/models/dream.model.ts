import { getModelForClass, modelOptions, prop, Ref } from "@typegoose/typegoose";

import { User } from "./user.model";

class Resource {
  @prop()
  title!: string;

  @prop({ required: true })
  status!: string;
}

class Step {
  @prop()
  name!: string;

  @prop({ type: () => [Resource], default: [] })
  resources!: Resource[];
}

@modelOptions({ schemaOptions: { collection: 'dreams' } })
export class Dream {
  @prop()
  trelloId?: string;

  @prop()
  title?: string;

  @prop()
  description?: string;

  @prop()
  shortLink?: string;

  @prop()
  coverImage?: string;

  @prop({ ref: () => User, required: true })
  ownerId!: Ref<User>;

  @prop({ ref: () => User, required: true })
  managerId!: Ref<User>;

  @prop({ type: () => [Step], default: [] })
  steps!: Step[];

  @prop({ required: true })
  status!: string;

  @prop()
  dreamStage?: string;
}

export const DreamModel = getModelForClass(Dream);
