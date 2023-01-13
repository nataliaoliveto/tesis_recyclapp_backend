import express from "express";
import cors from "cors";
import {
  userRouter,
  addressRouter,
  ratingRouter,
  subscriptionRouter,
  advertisementRouter,
  organicRouter,
} from "./routes";

import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", userRouter);
app.use("/api", addressRouter);
app.use("/api", ratingRouter);
app.use("/api", subscriptionRouter);
app.use("/api", advertisementRouter);
app.use("/api", organicRouter);
app.use("*", (req, res) => {
  res.status(404).json({
    message: "Not Found",
  });
});

async function main() {
  // ? +++++++++++++++ USER +++++++++++++++
  async function mainUser() {
    console.log("mainUser");
    // await prisma.user.deleteMany();
    // await prisma.user.delete({
    //   where: {
    //     id: 30,
    //   },
    // });
    // await prisma.user.findUnique({
    //   where: {
    //     id: 32,
    //   },
    // });
    // await prisma.user.update({
    //   where: {
    //     id: 32,
    //   },
    //   data: {
    //     isArchived: true,
    //   },
    // });
    // await prisma.user.create({
    //   data: {
    //     name: "Elsa",
    //     surname: "Prisma",
    //     mail: "elsa2@prisma.io",
    //     phone: "01144446666",
    //     password: "password",
    //     username: "elsaprisma",
    //     address: {
    //       create: {
    //         city: "Istanbul",
    //         flat: "1",
    //         street: "Istiklal",
    //         latitude: 41.01384,
    //         longitude: 28.94966,
    //         postalCode: "34433",
    //         state: "Istanbul",
    //       },
    //     },
    //   },
    //   include: {
    //     address: true,
    //   },
    // });
    // await prisma.user.create({
    //   data: {
    //     name: "Sarah",
    //     surname: "Prisma",
    //     mail: "sarah@prisma.io",
    //     phone: "01144446666",
    //     password: "password",
    //     username: "sarahprisma",
    //     address: {},
    //   },
    // });
  }

  // ? +++++++++++++++ ADDRESS +++++++++++++++
  async function mainAddress() {
    console.log("mainAddress");

    // await prisma.address.delete({
    //   where: {
    //     id: 15,
    //   },
    // });
    // const address = await prisma.address.create({
    //   data: {
    //     city: "Istanbul",
    //     flat: "1",
    //     street: "Istiklal",
    //     latitude: 41.01384,
    //     longitude: 28.94966,
    //     postalCode: "34433",
    //     state: "Istanbul",
    //   },
    // });
  }

  // ? +++++++++++++++ RATING +++++++++++++++
  async function mainRating() {
    console.log("mainRating");
    // await prisma.rating.create({
    //   data: {
    //     userId: 30,
    //     text: "MUY BUENO EU BUENISIMO",
    //     value: 5,
    //   },
    // });
    // await prisma.rating.update({
    //   where: {
    //     id: 2,
    //   },
    //   data: {
    //     user: {
    //       connect: {
    //         id: 32,
    //       },
    //     },
    //   },
    // });
    // await prisma.rating.delete({
    //   where: {
    //     id: 3,
    //   },
    // });
  }

  // ? +++++++++++++++ SUBSCRIPTION +++++++++++++++
  async function mainSubscription() {
    console.log("mainSubscription");
    // await prisma.subscription.createMany({
    //   data: [
    //     {
    //       name: "daily",
    //       amount: 375,
    //       duration: 1,
    //     },
    //     {
    //       name: "weekly",
    //       amount: 2350,
    //       duration: 7,
    //     },
    //     {
    //       name: "monthly",
    //       amount: 8460,
    //       duration: 28,
    //     },
    //   ],
    //   skipDuplicates: true,
    // });
    // await prisma.subscription.delete({
    //   where: {
    //     id: 3,
    //   },
    // });
  }

  // ? +++++++++++++++ ADVERTISEMENT +++++++++++++++
  async function mainAdvertisement() {
    console.log("mainAdvertisement");
    // await prisma.advertisement.create({
    //   data: {
    //     userId: 30,
    //     subscriptionId: 1,
    //     durationStart: new Date("2022-12-18"),
    //     durationEnd: new Date("2022-12-19"),
    //     displayName: "Ad Daily",
    //     text: "Advertisement Daily Subscription Test",
    //   },
    // });
    // await prisma.advertisement.createMany({
    //   data: [
    //     {
    //       userId: 30,
    //       subscriptionId: 2,
    //       durationStart: new Date("2022-12-18"),
    //       durationEnd: new Date("2022-12-25"),
    //       displayName: "Ad Weekly",
    //       text: "Advertisement Weekly Subscription Test",
    //     },
    //     {
    //       userId: 30,
    //       subscriptionId: 3,
    //       durationStart: new Date("2022-12-19"),
    //       durationEnd: new Date("2023-01-19"),
    //       displayName: "Ad Monthly",
    //       text: "Advertisement Monthly Subscription Test",
    //     },
    //   ],
    //   skipDuplicates: true,
    // });
    // await prisma.advertisement.update({
    //   where: {
    //     id: 2,
    //   },
    //   data: {
    //     subscription: {
    //       connect: {
    //         id: 3,
    //       },
    //     },
    //   },
    // });
    // await prisma.advertisement.delete({
    //   where: {
    //     id: 5,
    //   },
    // });
  }

  // ? +++++++++++++++ ORGANICO +++++++++++++++
  async function mainOrganic() {
    console.log("mainOrganic");
    // TODO: also check lower/upper

    // await prisma.organic.create({
    //   data: {
    //     name: "mAnzana".toLowerCase(),
    //     isCompostable: true,
    //   },
    // });
    // await prisma.advertisement.createMany({
    //   data: [
    //     {
    //       userId: 30,
    //       subscriptionId: 2,
    //       durationStart: new Date("2022-12-18"),
    //       durationEnd: new Date("2022-12-25"),
    //       displayName: "Ad Weekly",
    //       text: "Advertisement Weekly Subscription Test",
    //     },
    //     {
    //       userId: 30,
    //       subscriptionId: 3,
    //       durationStart: new Date("2022-12-19"),
    //       durationEnd: new Date("2023-01-19"),
    //       displayName: "Ad Monthly",
    //       text: "Advertisement Monthly Subscription Test",
    //     },
    //   ],
    //   skipDuplicates: true,
    // });
    // await prisma.advertisement.update({
    //   where: {
    //     id: 2,
    //   },
    //   data: {
    //     subscription: {
    //       connect: {
    //         id: 3,
    //       },
    //     },
    //   },
    // });
    // await prisma.advertisement.delete({
    //   where: {
    //     id: 5,
    //   },
    // });
  }

  // ! +++++++++++++++ RUN +++++++++++++++
  mainUser();
  mainAddress();
  mainRating();
  mainSubscription();
  mainAdvertisement();
  mainOrganic();

  // ? +++++++++++++++ DISPLAY +++++++++++++++
  async function mainDisplay() {
    console.log("mainDisplay");
    // const users = await prisma.user.findMany({
    //   include: {
    //     address: true,
    //   },
    // });
    // const ratings = await prisma.rating.findMany();
    //const subscriptions = await prisma.subscription.findMany();
    const organics = await prisma.organic.findMany();
    // console.log("users", JSON.stringify(users, null, 2));
    // console.log("ratings", JSON.stringify(ratings, null, 2));
    //console.log("subscriptions", JSON.stringify(subscriptions, null, 2));
    console.log("organics", JSON.stringify(organics, null, 2));
  }

  // ! +++++++++++++++ RUN +++++++++++++++
  mainDisplay();
}

main();

app.get("/", async (req: any, res: any) => {
  return res.json({ message: "Hello World" });
});

const server = app.listen(5000, () => console.log("server ready at 5000"));
