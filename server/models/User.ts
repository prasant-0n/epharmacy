import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
    email?: string;
    phone?: string;
    password?: string;
    googleId?: string;
    appleId?: string;
    microsoftId?: string;
    otp?: string;
    otpExpires?: Date;
}

const userSchema: Schema<IUser> = new Schema({
    email: { type: String, unique: true },
    phone: { type: String, unique: true },
    password: { type: String },
    googleId: { type: String },
    appleId: { type: String },
    microsoftId: { type: String },
    otp: { type: String },
    otpExpires: { type: Date }
});

export default mongoose.model<IUser>('User', userSchema);
