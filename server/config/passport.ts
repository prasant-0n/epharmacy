import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as AppleStrategy } from 'passport-apple';
import { Strategy as MicrosoftStrategy } from 'passport-microsoft';
import User, { IUser } from '../models/User';
import { Document } from 'mongoose';

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    callbackURL: "/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const user = await User.findOneAndUpdate({ googleId: profile.id }, { name: profile.displayName }, { new: true, upsert: true });
        done(null, user);
    } catch (error) {
        done(error);
    }
}));

passport.use(new AppleStrategy({
    clientID: process.env.APPLE_CLIENT_ID as string,
    teamID: 'YOUR_TEAM_ID',
    keyID: 'YOUR_KEY_ID',
    privateKeyString: 'YOUR_PRIVATE_KEY',
    callbackURL: "/auth/apple/callback"
}, async (accessToken, refreshToken, idToken, profile, done) => {
    try {
        const user = await User.findOneAndUpdate({ appleId: profile.id }, { name: profile.displayName }, { new: true, upsert: true });
        done(null, user);
    } catch (error) {
        done(error);
    }
}));

passport.use(new MicrosoftStrategy({
    clientID: process.env.MICROSOFT_CLIENT_ID as string,
    clientSecret: process.env.MICROSOFT_CLIENT_SECRET as string,
    callbackURL: "/auth/microsoft/callback",
    scope: ['user.read']
}, async (accessToken: any, refreshToken: any, profile: { id: any; displayName: any; }, done: (arg0: unknown, arg1: (Document<unknown, {}, IUser> & IUser & Required<{ _id: unknown; }>) | undefined) => void) => {
    try {
        const user = await User.findOneAndUpdate({ microsoftId: profile.id }, { name: profile.displayName }, { new: true, upsert: true });
        done(null, user);
    } catch (error) {
        done(error);
    }
}));

passport.serializeUser((user: any, done) => {
    done(null, user.id);
});

passport.deserializeUser((id: string, done) => {
    User.findById(id, (err: any, user: boolean | Express.User | null | undefined) => {
        done(err, user);
    });
});
