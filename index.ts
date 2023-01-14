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
app.use("/api", materialProductRouter);
app.use("*", (req, res) => {
  res.status(404).json({
    message: "Not Found",
  });
});

async function main() {
  // * +++++++++++++++ USER +++++++++++++++
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

  // * +++++++++++++++ ADDRESS +++++++++++++++
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

  // * +++++++++++++++ RATING +++++++++++++++
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

  // * +++++++++++++++ SUBSCRIPTION +++++++++++++++
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

  // * +++++++++++++++ ADVERTISEMENT +++++++++++++++
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

  // * +++++++++++++++ ORGANICO +++++++++++++++
  async function mainOrganic() {
    console.log("mainOrganic");

    // await prisma.organic.upsert({
    //   where: {
    //     name: "Banana con dulce de leche".trim(),
    //   },
    //   update: {
    //     name: "Manzana".trim(),
    //   },
    //   create: {
    //     name: "Manzana".trim(),
    //     isCompostable: true,
    //   },
    // });

    // await prisma.organic.create({
    //   data: {
    //     name: "mAnzana".toLowerCase(),
    //     isCompostable: true,
    //   },
    // });
  }

  // * +++++++++++++++ MATERIAL COMPONENT +++++++++++++++
  async function mainMaterialComponent() {
    console.log("mainMaterialComponent");

    // await prisma.materialComponent.delete({
    //   where: {
    //     id: 17,
    //   },
    // });

    // await prisma.materialComponent.upsert({
    //   where: {
    //     name: "Vidrio".trim(),
    //   },
    //   update: {
    //     //   name: "Vidrio".trim(),
    //     //   isRecyclable: true,
    //   },
    //   create: {
    //     name: "Vidrio".trim(),
    //     description:
    //       "Limpiar y secar el vidrio de restos orgánicos. Según el producto de vidrio, puede contener una marca que indica su nivel de reutilización.",
    //     recyclableType: "RECYCLABLE",
    //   },
    // });

    // await prisma.materialComponent.upsert({
    //   where: {
    //     name: "Tetra-brick".trim(),
    //   },
    //   update: {
    //     //   name: "Vidrio".trim(),
    //     //   isRecyclable: true,
    //   },
    //   create: {
    //     name: "Tetra-brick".trim(),
    //     description:
    //       "Limpiar y secar el tetra-brick de restos orgánicos. Compuesto en parte por cartón y en parte por aluminio. Tiene una complejidad diferente de reciclaje.",
    //     recyclableType: "RECYCLABLE",
    //   },
    // });

    // await prisma.materialComponent.upsert({
    //   where: {
    //     name: "Plástico".trim(),
    //   },
    //   update: {
    //     //   name: "Vidrio".trim(),
    //     //   isRecyclable: true,
    //   },
    //   create: {
    //     name: "Plástico".trim(),
    //     description: `Plásticos reciclables o reutilizables: \n
    //     1 - PET (Tereftalato de Polietileno)
    //     2 - HDPE (Polietileno de alta densidad)
    //     3 - PVC (Polivinilo)
    //     4 - LDPE (Polietileno de baja densidad)
    //     5 - PP (Polipropileno)
    //     6 - PS (Poliestireno)
    //     Plástico no reciclable ni reutilizable:
    //     7 - Otros plásticos y materiales compuestos.
    //     Si contiene la sigla “PLA” son biodegradables y pueden ser compostados`,
    //     recyclableType: "DEPENDS",
    //   },
    // });
  }

  // * +++++++++++++++ MATERIAL PRODUCT +++++++++++++++
  async function mainMaterialProduct() {
    console.log("mainMaterialProduct");

    // await prisma.materialProduct.delete({
    //   where: {
    //     id: 4,
    //   },
    // });

    // TODO: INSERT/UPDATE/DELETE record by ID where name = "";
    // TODO: check if it is possible to DELETE previous relationship through update connections or separate queries
    // await prisma.materialProduct.upsert({
    //   where: {
    //     name: "Cartón de vino".trim(),
    //   },
    //   update: {
    //     materialComponent: {
    //       connect: [
    //         {
    //           id: 16,
    //         },
    //         {
    //           id: 18,
    //         },
    //       ],
    //     },
    //   },
    //   create: {
    //     name: "Cartón de vino".trim(),
    //     materialComponent: {
    //       connect: [
    //         {
    //           id: 16,
    //         },
    //         // {
    //         //   id: 18,
    //         // },
    //       ],
    //     },
    //   },
    // });

    // await prisma.organic.create({
    //   data: {
    //     name: "mAnzana".toLowerCase(),
    //     isCompostable: true,
    //   },
    // });
  }

  // ! +++++++++++++++ RUN +++++++++++++++
  await mainUser();
  await mainAddress();
  await mainRating();
  await mainSubscription();
  await mainAdvertisement();
  await mainOrganic();
  await mainMaterialComponent();
  await mainMaterialProduct();

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
    const materialProducts = await prisma.materialProduct.findMany();

    // ({
    //   where: {
    //     name: {
    //       endsWith: "BANANA".toLowerCase(),
    //       mode: "insensitive", // Default value: default
    //     },
    //   },
    // });

    // console.log("users", JSON.stringify(users, null, 2));
    // console.log("ratings", JSON.stringify(ratings, null, 2));
    //console.log("subscriptions", JSON.stringify(subscriptions, null, 2));
    console.log("organics", JSON.stringify(materialProducts, null, 2));
  }

  // ! +++++++++++++++ RUN +++++++++++++++
  await mainDisplay();
}

main();

app.get("/", async (req: any, res: any) => {
  return res.json({ message: "Hello World" });
});

const server = app.listen(5000, () => console.log("server ready at 5000"));
