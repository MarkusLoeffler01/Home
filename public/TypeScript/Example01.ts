import { PrismaClient } from "@prisma/client";
import express from "express";

export const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.get("/user", async (req, res) => {
    const minAge = req.query.minAge;
    if(!Number.isInteger(minAge)) return res.send(400, "Bad request, minAge is not a number");
    const result = await prisma.user.findMany<User[]>();
    res.json(result.filter(user => user.age > 18));
});

app.listen(3000);

interface User {
    name: string;
    age: number;
}
