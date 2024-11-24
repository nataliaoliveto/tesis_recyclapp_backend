import express from "express";
import cors from "cors";

import {
  userRouter,
  addressRouter,
  ratingRouter,
  subscriptionRouter,
  advertisementRouter,
  materialProductRouter,
  materialComponentRouter,
  postRouter,
  chatMessageRouter,
  chatRouter,
  benefitRouter,
  benefitAssignmentRouter,
  imageRouter,
  commentRouter,
} from "./routes";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", userRouter);
app.use("/api", addressRouter);
app.use("/api", ratingRouter);
app.use("/api", subscriptionRouter);
app.use("/api", advertisementRouter);
app.use("/api", materialProductRouter);
app.use("/api", materialComponentRouter);
app.use("/api", postRouter);
app.use("/api", chatMessageRouter);
app.use("/api", chatRouter);
app.use("/api", benefitRouter);
app.use("/api", benefitAssignmentRouter);
app.use("/api", imageRouter);
app.use("/api", commentRouter);

app.use("*", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.status(404).json({
    message: "Not Found",
  });
});

async function mainDisplay() {
  console.log("mainDisplay");
  // const arrayFindManyUsers = await prisma.user.findMany({});
  // console.log(
  //   "arrayFindManyUsers",
  //   JSON.stringify(arrayFindManyUsers, null, 1)
  // );
}

async function main() {
  await mainDisplay();
}

main();

app.get("/", async (req: any, res: any) => {
  return res.json({ message: "Hello World" });
});

const server = app.listen(5000, () => console.log("server ready at 5000"));

// TODO: error handler
// code: 'P2025',
// clientVersion: '4.10.1',
// meta: { cause: 'Record to delete does not exist.' },
// batchRequestIdx: undefined
