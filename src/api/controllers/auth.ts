import { Request, Response } from 'express';

export const signIn = async (_req: Request, res: Response) => {
    console.log("1");

    res.send({ status: 200, message: "Sign-in!" });
}

export const signUp = async (_req: Request, res: Response) => {
    console.log("2");

    res.send({ status: 200, message: "Sign-up!" });
}

export const permissions = async (_req: Request, res: Response) => {
    console.log("3");

    res.send({ status: 200, message: "Permissions!" });
}