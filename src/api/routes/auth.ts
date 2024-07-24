import { Router } from 'express';
import { permissions, signIn, signUp } from '@controllers/auth';

export default Router()
                .get("/permissions", permissions)
                .get("/signin", signIn)
                .post("/signup", signUp);