// import bcrypt from "bcryptjs";
// import { model, Schema, Document, Types } from "mongoose";

// // Define interfaces for the additional fields
// interface Address {
//   landMark:string;
//   street: string;
//   city: string;
//   state: string;
//   country: string;
//   postalCode: string;
//   isHomeDelivery:boolean;
// }

// interface Order {
//   orderId: string;
//   items: any[]; // Replace 'any' with a specific item type if available
//   total: number;
//   status: string;
//   createdAt: Date;
//   updatedAt: Date;
// }

// interface WishlistItem {
//   productId: string;
//   addedAt: Date;
// }

// interface CartItem {
//   productId: string;
//   quantity: number;
//   addedAt: Date;
// }

// // Extend the user document interface to include the new fields
// export interface UserDocument extends Document {
//   _id: Types.ObjectId; // Explicitly define the type of _id
//   name: string;
//   email: string;
//   password: string;
//   isAdmin: boolean;
//   address: Address;
//   orderList: Order[];
//   wishlist: WishlistItem[];
//   cartItems: CartItem[];
//   phone: string;
//   matchPassword(enteredPassword: string): Promise<boolean>;
// }

// // Define the user schema
// const userSchema = new Schema<UserDocument>(
//   { 
//     name: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     isAdmin: {
//       type: Boolean,
//       required: true,
//       default: false,
//     },
//     address: {
//       street: { type: String, required: true },
//       city: { type: String, required: true },
//       state: { type: String, required: true },
//       country: { type: String, required: true },
//       postalCode: { type: String, required: true },
//       isHomeDelivery:{type:Boolean, required:true },
//     },
//     orderList: [
//       {
//         orderId: { type: String, required: true },
//         items: [{ type: Schema.Types.Mixed, required: true }], // Adjust the type as necessary
//         total: { type: Number, required: true },
//         status: { type: String, required: true },
//         createdAt: { type: Date, required: true, default: Date.now },
//         updatedAt: { type: Date, required: true, default: Date.now },
//       },
//     ],
//     wishlist: [
//       {
//         productId: { type: String, required: true },
//         addedAt: { type: Date, required: true, default: Date.now },
//       },
//     ],
//     cartItems: [
//       {
//         productId: { type: String, required: true },
//         quantity: { type: Number, required: true, default: 1 },
//       },
//     ],
//     phone: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//   },
//   {
//     timestamps: true, // Automatically create createdAt and updatedAt timestamps
//   }
// );

// /**
//  * Use Bcrypt to check that an entered password matches the password of a user
//  * @param enteredPassword The password that a user enters
//  */
// userSchema.methods.matchPassword = async function (
//   this: UserDocument,
//   enteredPassword: string
// ): Promise<boolean> {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// /**
//  * Runs before the model saves and checks to see if password has been
//  * modified and hashes the password before saving to database
//  */
// userSchema.pre("save", async function (this: UserDocument, next) {
//   if (!this.isModified("password")) return next();
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// export const User = model<UserDocument>("User", userSchema);



import bcrypt from "bcryptjs";
import { model, Schema } from "mongoose";
import { UserDocument } from "../types/user";
// import { UserDocument } from "../types/UserDocument";

const userSchema = new Schema<UserDocument>(
  {
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: false,
      default: false,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true, // Automatically create createdAt and updatedAt timestamps
  }
);

/**
 * Use Bcrypt to check that an entered password matches the password of a user
 * @param enteredPassword The password that a user enters
 */
userSchema.methods.matchPassword = async function (
  enteredPassword: string
): Promise<boolean> {
  return await bcrypt.compare(enteredPassword, this.password);
};

/**
 * Runs before the model saves and checks to see if password has been
 * modified and hashes the password before saving to the database
 */
userSchema.pre<UserDocument>("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

export const User = model<UserDocument>("User", userSchema);
