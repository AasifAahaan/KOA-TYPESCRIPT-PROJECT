import { Context } from 'koa';
import User from '../models/User';

// Controller to get all users
export const getAllUsers = async (ctx: Context) => {
    try {
        const users = await User.find();
        ctx.body = users;
    } catch (err:any) {
        ctx.status = 500;
        ctx.body = err.message;
    }
};

export const createUser = async (ctx: Context) => {
    const { name, email } = ctx.request.body as { name: string; email: string };
    try {
        const newUser = new User({ name, email });
        await newUser.save();
        ctx.status = 201;
        ctx.body = newUser;
    } catch (err:any) {
        ctx.status = 500;
        ctx.body = err.message;
    }
};
