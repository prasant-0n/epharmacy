import { Model, Document, Types } from "mongoose";

/**
 * Represents a user
 */
export interface User {
  _id: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  isAdmin?: boolean;
  phone: Number;
}

export interface UserDocument extends User, Document {
  remove(): unknown;
  matchPassword: (password: string) => Promise<Boolean>;
}

export interface UserModel extends Model<UserDocument> {}
