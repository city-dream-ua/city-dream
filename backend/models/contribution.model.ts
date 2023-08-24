// import { ObjectId } from "mongodb";
// import { prop, Ref, modelOptions, getModelForClass } from "@typegoose/typegoose";
// import {Resource} from "./resource.model";
// import {User} from "./user.model";
//
// @modelOptions({ schemaOptions: { collection: 'contributions' } })
// class Contribution {
//   _id!: ObjectId;
//
//   @prop({ ref: () => Resource })
//   resourceId?: Ref<Resource>;
//
//   @prop({ ref: () => User })
//   userId?: Ref<User>;
//
//   @prop()
//   list?: string;
// }
//
// export const ContributionModel = getModelForClass(Contribution);
