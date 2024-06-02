import crypto from 'crypto';

const generateOtp = (): string => {
    return crypto.randomBytes(3).toString('hex');
};

export default generateOtp;
