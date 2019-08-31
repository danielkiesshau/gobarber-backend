import bcrypt from 'bcryptjs';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const { email, id, name, provider } = await User.create(req.body);

    return res.json({
      email,
      id,
      name,
      provider,
    });
  }
}

export default new UserController();
