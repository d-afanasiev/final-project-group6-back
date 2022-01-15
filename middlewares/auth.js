import httpError from 'http-errors';
import jwt from 'jsonwebtoken';

import { User } from '../schemas/mongoose/index.js';

const { SECRET_KEY } = process.env;

const authMiddleware = async (req, res, next) => {
  const { authorization = '' } = req.headers;
  const [bearer, token] = authorization.split(' ');
  try {
    if (bearer !== 'Bearer') {
      throw new httpError.Unauthorized('No authorized');
    }
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if (!user || !user.token) {
      throw new httpError.Unauthorized('No authorized');
    }
    req.user = user;
    next();
  } catch (error) {
    if (error.massage === 'Invalid sugnature') {
      error.status = 401;
    }
    next(error);
  }
};

export default authMiddleware;
