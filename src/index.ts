import 'dotenv/config';
import express from "express";
import cors from "cors";

import authRoutes from '@routes/auth';
import usersRoutes from '@routes/users';
import client from "./config/db";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth/", authRoutes);
app.use("/users/", usersRoutes);

app.listen(PORT, async () => {
    const types = await client.query("SELECT * FROM user_types");
    console.log("Types: ", types.rows);

    console.log(`Server created with Sucess! Link: localhost:${PORT}`);
});