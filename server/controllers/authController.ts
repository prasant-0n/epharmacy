import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User, { IUser } from '../models/User';
import generateOtp from '../utils/generateOtp';
import sendEmail from '../utils/sendEmail';
import sendSms from '../utils/sendSms';

// Ensure required environment variables are defined
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET environment variable is not defined');
}

export const register = async (req: Request, res: Response): Promise<void> => {
  const { email, phone, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = generateOtp();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000);

    const user = new User({ email, phone, password: hashedPassword, otp, otpExpires });
    await user.save();

    if (email) {
      await sendEmail(email, 'Your OTP Code', `Your OTP code is ${otp}`);
    }

    if (phone) {
      await sendSms(phone, `Your OTP code is ${otp}`);
    }

    res.status(201).json({ message: 'User registered, OTP sent' });
  } catch (error) {
    res.status(500).json({ error: 'Error registering user' });
  }
};

export const verifyOtp = async (req: Request, res: Response): Promise<void> => {
  const { email, phone, otp } = req.body;

  try {
    const user = await User.findOne({
      $or: [{ email }, { phone }],
      otp,
      otpExpires: { $gte: new Date() },
    });

    if (!user) {
      res.status(400).json({ error: 'Invalid or expired OTP' });
      return;
    }

    user.otp = undefined;
    user.otpExpires = undefined;
    await user.save();

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'OTP verified', token });
  } catch (error) {
    res.status(500).json({ error: 'Error verifying OTP' });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, phone, password } = req.body;

  try {
    const user = await User.findOne({
      $or: [{ email }, { phone }],
    });

    if (!user || !user.password || !(await bcrypt.compare(password, user.password))) {
      res.status(400).json({ error: 'Invalid credentials' });
      return;
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Logged in successfully', token });
  } catch (error) {
    res.status(500).json({ error: 'Error logging in' });
  }
};

export const logout = (req: Request, res: Response): void => {
  req.logout((err) => {
    if (err) {
      res.status(500).json({ error: 'Error logging out' });
      return;
    }
    res.status(200).send('Logged out');
  });
};
