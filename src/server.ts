import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import connectDB from './config/database';
import { createUser, getAllUsers } from './controller/userController';

const app = new Koa();
const router = new Router();

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser());

// Routes
router.get('/users', getAllUsers);
router.post('/users', createUser);

app.use(router.routes()).use(router.allowedMethods());

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
