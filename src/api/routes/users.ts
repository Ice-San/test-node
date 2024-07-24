import { Router } from 'express';
import { getUser, getUsers, createUser } from '@controllers/users';

export default Router()
                .get("/:id", getUser)
                .get("/", getUsers)
                .post("/", createUser);