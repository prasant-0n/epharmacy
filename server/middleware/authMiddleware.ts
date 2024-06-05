import jwt, { Secret } from "jsonwebtoken";
import { User } from "../models/";
import asyncHandler from "express-async-handler";
import { NextFunction, Request, Response } from "../types/express";

interface Decoded {
  id: string;
  iat: number; // Changed to number to match JWT standards
  exp: number; // Changed to number to match JWT standards
}

/**
 * Middleware used to protect routes from unauthorized users
 */
const protect = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    let token;

    const secret: Secret = process.env.JWT_SECRET!;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        token = req.headers.authorization.split(" ")[1];

        const decoded = jwt.verify(token, secret) as Decoded;

        const user = await User.findById(decoded.id).select("-password");
        
        if (!user) {
          res.status(401);
          throw new Error("User not found");
        }
        
        req.user = {
          ...user.toObject(),
          _id: user._id.toString(), // Convert ObjectId to string
        };
        
        next();
      } catch (error) {
        console.error(error);
        res.status(401);
        throw new Error("Not authorized, token failed");
      }
    }

    if (!token) {
      res.status(401);
      throw new Error("Not authorized, no token");
    }
  }
);

/**
 * Middleware used to protect routes from users who are not flagged as admin
 */
const admin = (req: Request, res: Response, next: NextFunction) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as an admin");
  }
};

export { protect, admin };
