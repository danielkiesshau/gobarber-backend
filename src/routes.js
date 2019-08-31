import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'daniel',
    email: 'daniel@email.com',
    password_hash: '1234234213',
  })
  return res.json(user);
});

export default routes;
