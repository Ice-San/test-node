import { Request, Response } from "express";

export const getUsers = async (_req: Request, res: Response) => {
    console.log("4");

    res.send({ status: 200, message: "Get all Users!" });
}

export const getUser = async (req: Request, res: Response) => {
    console.log("5");

    const { id } = req.params;
    const { email, name } = req.query;

    res.send({ status: 200, message: `Get User ID ${id} and email: ${email || "alberto@gmail.com"}`});
}

export const createUser = async (_req: Request, res: Response) => {
    console.log("6");

    res.send({ status: 200, message: "Created a user sucessfully!" });
}