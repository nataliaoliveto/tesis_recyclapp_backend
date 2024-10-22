import express from "express";
import cors from "cors";

import {
  userRouter,
  addressRouter,
  ratingRouter,
  subscriptionRouter,
  advertisementRouter,
  organicRouter,
  materialProductRouter,
  materialComponentRouter,
  greenPointRouter,
  postRouter,
  postCommitmentRouter,
  chatMessageRouter,
  chatRouter,
  imageRouter,
  donationRouter,
  benefitRouter,
} from "./routes";

import {
  mainUser,
  mainAddress,
  mainRating,
  mainSubscription,
  mainAdvertisement,
  mainImage,
  mainOrganic,
  mainMaterialComponent,
  mainMaterialProduct,
  mainGreenPoint,
  mainPost,
  mainPostCommitment,
  mainChat,
  mainChatMessage,
  mainUserStore,
  mainBenefit,
  cloudinary,
} from "./test";

import { PrismaClient, Prisma } from "@prisma/client";
import imagesController from "./controllers/images.controller";
import { handleDelete } from "./utils/cloudinary.config";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", userRouter);
app.use("/api", addressRouter);
app.use("/api", ratingRouter);
app.use("/api", subscriptionRouter);
app.use("/api", advertisementRouter);
app.use("/api", organicRouter);
app.use("/api", materialProductRouter);
app.use("/api", materialComponentRouter);
app.use("/api", greenPointRouter);
app.use("/api", postRouter);
app.use("/api", postCommitmentRouter);
app.use("/api", chatMessageRouter);
app.use("/api", chatRouter);
app.use("/api", imageRouter);
app.use("/api", donationRouter);
app.use("/api", benefitRouter);

app.use("*", (req, res) => {
  res.status(404).json({
    message: "Not Found",
  });
  // res.header("Access-Control-Allow-Origin", "http://localhost:3000/");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
});

async function mainDisplay() {
  console.log("mainDisplay");
  const arrayFindMany = await prisma.userStore.findMany({});
  console.log("arrayFindMany", JSON.stringify(arrayFindMany, null, 2));
  // const arrayFindManyUsers = await prisma.user.findMany({});
  // console.log(
  //   "arrayFindManyUsers",
  //   JSON.stringify(arrayFindManyUsers, null, 1)
  // );
}

async function main() {
  // ! +++++++++++++++ RUN +++++++++++++++
  // await mainUser();
  // await mainAddress();
  // await mainRating();
  // await mainSubscription();
  // await mainAdvertisement();
  // await mainImage();
  // await mainOrganic();
  // await mainMaterialComponent();
  // await mainMaterialProduct();
  // await mainGreenPoint();
  // await mainPost();
  // await mainPostCommitment();
  // await mainChat();
  // await mainChatMessage();
  // await mainUserStore();
  // await mainUserCustomer();
  // await mainBenefit();
  // await cloudinary();
  // await mainBenefit();

  // ! +++++++++++++++ RUN +++++++++++++++
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
