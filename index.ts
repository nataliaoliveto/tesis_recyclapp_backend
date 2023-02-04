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
app.use("/api", materialComponentRouter);
app.use("/api", greenPointRouter);
app.use("/api", postRouter);
app.use("/api", postCommitmentRouter);
app.use("/api", chatMessageRouter);
app.use("/api", chatRouter);

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
    //     id: 1,
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
    //     userType: "CUSTOMER",
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
    //     name: "Aceite vegetal usado".trim(),
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
    //     name: "Tetra-brick0".trim(),
    //   },
    //   update: {
    //     name: "Tetra-brick0".trim(),
    //     MaterialProduct: {
    //       set: [],
    //       connect: [
    //         {
    //           id: 3,
    //         },
    //         // {
    //         //   id: 9,
    //         // },
    //       ],
    //     },
    //     recyclableType: "RECYCLABLE",
    //   },
    //   create: {
    //     name: "Tetra-brick0".trim(),
    //     description:
    //       "Limpiar y secar el tetra-brick de restos orgánicos. Compuesto en parte por cartón y en parte por aluminio. Tiene una complejidad diferente de reciclaje.",
    //     // MaterialProduct: {
    //     // connect: [
    //     //   {
    //     //     id: 2,
    //     //   },
    //     //   {
    //     //     id: 9,
    //     //   },
    //     // ],
    //     // },
    //     recyclableType: "RECYCLABLE",
    //   },
    // });

    // await prisma.materialComponent.upsert({
    //   where: {
    //     name: "Plástico".trim(),
    //   },
    //   update: {
    //     GreenPoint: {
    //       //   set: [],
    //       connectOrCreate: [
    //         {
    //           where: {
    //             idpv: "PV-045".trim(),
    //           },
    //           create: {
    //             idpv: "PV-045".trim(),
    //             name: "PLAZA CASTELLEEE".trim(),
    //             availability: [
    //               {
    //                 day: "Martes".trim(),
    //                 hours: "11 a 17".trim(),
    //                 organic: false,
    //               },
    //               {
    //                 day: "Miércoles".trim(),
    //                 hours: "11 a 17".trim(),
    //                 organic: false,
    //               },
    //               {
    //                 day: "Jueves".trim(),
    //                 hours: "11 a 17".trim(),
    //                 organic: false,
    //               },
    //               {
    //                 day: "Viernes".trim(),
    //                 hours: "11 a 17".trim(),
    //                 organic: false,
    //               },
    //               {
    //                 day: "Sábado".trim(),
    //                 hours: "11 a 17".trim(),
    //                 organic: false,
    //               },
    //             ],
    //             type: "Punto Verde Con Atención",
    //             cooperative: "Cooperativa de Trabajo Las Madreselvas",
    //             Address: {
    //               create: {
    //                 city: "BELGRANO",
    //                 flat: "",
    //                 street: "CONDE y JURAMENTO",
    //                 latitude: -34.567311427126597,
    //                 longitude: -58.46463459803104,
    //                 state: "CABA",
    //               },
    //             },
    //             hasOrganic: true,
    //           },
    //         },
    //       ],
    //     },
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
    //     id: 3,
    //   },
    // });

    // await prisma.materialProduct.upsert({
    //   where: {
    //     name: "Cartón de leche".trim(),
    //   },
    //   update: {
    //     materialComponent: {
    //       set: [],
    //       // connect: [
    //       //   {
    //       //     id: 16,
    //       //   },
    //       //   {
    //       //     id: 20,
    //       //   },
    //       // ],
    //     },
    //   },
    //   create: {
    //     name: "Cartón de leche".trim(),
    //     materialComponent: {
    //       connect: [
    //         {
    //           id: 16,
    //         },
    //         {
    //           id: 20,
    //         },
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

  // * +++++++++++++++ GREEN POINT +++++++++++++++
  async function mainGreenPoint() {
    console.log("mainGreenPoint");

    // await prisma.greenPoint.delete({
    //   where: {
    //     id: 2,
    //   },
    // });

    // await prisma.greenPoint.upsert({
    //   where: {
    //     idpv: "PV-045".trim(),
    //     // name: "Green Point 01".trim(),
    //   },
    //   update: {
    //     // cooperative: "Cooperativa de Trabajo Las 2",
    //     // materialComponent: {
    //     //   //   set: [],
    //     //   connectOrCreate: [
    //     //     {
    //     //       where: {
    //     //         name: "Aceite vegetal usado".trim(),
    //     //       },
    //     //       create: {
    //     //         name: "Aceite vegetal usado".trim(),
    //     //         recyclableType: "RECYCLABLE",
    //     //         description: "",
    //     //       },
    //     //     },
    //     //     {
    //     //       where: {
    //     //         name: "Pilas".trim(),
    //     //       },
    //     //       create: {
    //     //         name: "Pilas".trim(),
    //     //         recyclableType: "NO_RECYCLABLE",
    //     //         description: "",
    //     //       },
    //     //     },
    //     //     {
    //     //       where: { name: "Tetra-brik" },
    //     //       create: {
    //     //         name: "Tetra-brik",
    //     //         recyclableType: "RECYCLABLE",
    //     //         description: "",
    //     //       },
    //     //     },
    //     //   ],
    //     // },
    //   },
    //   create: {
    //     idpv: "PV-045".trim(),
    //     name: "PLAZA CASTELLEEEEEE".trim(),
    //     availability: [
    //       {
    //         day: "Martes".trim(),
    //         hours: "11 a 17".trim(),
    //         organic: false,
    //       },
    //       {
    //         day: "Miércoles".trim(),
    //         hours: "11 a 17".trim(),
    //         organic: false,
    //       },
    //       {
    //         day: "Jueves".trim(),
    //         hours: "11 a 17".trim(),
    //         organic: false,
    //       },
    //       {
    //         day: "Viernes".trim(),
    //         hours: "11 a 17".trim(),
    //         organic: false,
    //       },
    //       {
    //         day: "Sábado".trim(),
    //         hours: "11 a 17".trim(),
    //         organic: false,
    //       },
    //     ],
    //     type: "Punto Verde Con Atención",
    //     cooperative: "Cooperativa de Trabajo Las Madreselvas",
    //     Address: {
    //       create: {
    //         city: "BELGRANO",
    //         flat: "",
    //         street: "CONDE y JURAMENTO",
    //         latitude: -34.567311427126597,
    //         longitude: -58.46463459803104,
    //         state: "CABA",
    //       },
    //     },
    //     materialComponent: {
    //       connectOrCreate: [
    //         {
    //           where: {
    //             name: "Aceite vegetal usado".trim(),
    //           },
    //           create: {
    //             name: "Aceite vegetal usado".trim(),
    //             recyclableType: "RECYCLABLE",
    //             description: "",
    //           },
    //         },
    //         {
    //           where: {
    //             name: "Pilas".trim(),
    //           },
    //           create: {
    //             name: "Pilas".trim(),
    //             recyclableType: "NO_RECYCLABLE",
    //             description: "",
    //           },
    //         },
    //         {
    //           where: { name: "Tetra-brik" },
    //           create: {
    //             name: "Tetra-brik",
    //             recyclableType: "RECYCLABLE",
    //             description: "",
    //           },
    //         },
    //       ],
    //       // connectOrCreate: [
    //       // { name: 'RAEES' },
    //       // { name: 'Aceite vegetal usado'},
    //       // { name: 'Pilas' },
    //       // { name: 'Papel' },
    //       // { name: 'Cartón' },
    //       // { name: 'Vidrio' },
    //       // { name: 'Metal' },
    //       // { name: 'Plástico' },
    //       // { name: 'Tetra-brik' },
    //       // { name: 'Telgopor' }
    //       // ],
    //     },
    //     hasOrganic: true,
    //     // "materiales":"RAEES \/ Aceite vegetal usado (en botellas cerradas) \/ Pilas\/ Papel \/ Cartón \/ Vidrio \/ Metal \/ Plástico \/ Tetra-brik \/ Telgopor \/ Organicos (jueves)",
    //   },
    // });
  }

  // * +++++++++++++++ POST +++++++++++++++
  async function mainPost() {
    console.log("mainPost");

    // await prisma.post.delete({
    //   where: {
    //     id: 2,
    //   },
    // });

    // await prisma.post.upsert({
    //   where: {
    //     id: 2,
    //   },
    //   update: {},
    //   create: {
    //     quantity: 3,
    //     description: "frascos de vidrio de mermelada tapa verde la campagnola",
    //     purpouse: "WANT",
    //     pointsAwared: 50,
    //     userId: 1,
    //     materialProductId: 3,
    //   },
    // });

    // await prisma.post.findMany({
    //   where: {
    //     pointsAwared: 50,
    //   },
    // });
  }

  // * +++++++++++++++ POSTCOMMIT +++++++++++++++
  async function mainPostCommitment() {
    console.log("mainPostCommitment");

    // await prisma.postCommitment.delete({
    //   where: {
    //     id: 3,
    //   },
    // });

    // await prisma.postCommitment.upsert({
    //   where: {
    //     id: 3,
    //   },
    //   update: {},
    //   create: {
    //     tokenCode: "56406450",
    //     isActive: true,
    //     postId: 1,
    //   },
    // });
  }

  // * +++++++++++++++ CHAT +++++++++++++++
  async function mainChat() {
    console.log("mainChat");

    // await prisma.chat.delete({
    //   where: {
    //     id: 1,
    //   },
    // });

    // await prisma.chat.upsert({
    //   where: {
    //     id: 2,
    //   },
    //   update: {
    //     startDate: new Date().toISOString(),
    //     endDate: new Date().toISOString(),
    //     isActive: false,
    //     postId: 2,
    //   },
    //   create: {
    //     startDate: new Date().toISOString(),
    //     isActive: true,
    //     postId: 2,
    //   },
    // });
  }

  // * +++++++++++++++ CHAT MESSAGE +++++++++++++++
  async function mainChatMessage() {
    console.log("mainChatMessage");

    // await prisma.chatMessage.delete({
    //   where: {
    //     id: 5,
    //   },
    // });

    // await prisma.chatMessage.upsert({
    //   where: {
    //     id: 3,
    //   },
    //   update: {},
    //   create: {
    //     chatId: 3,
    //     // chat: {
    //     //   connect: {
    //     //     id: 3,
    //     //   },
    //     // },
    //     receiverId: 1,
    //     // receiver: {
    //     //   connect: {
    //     //     id: 1,
    //     //   },
    //     // },
    //     senderId: 3,
    //     // sender: {
    //     //   connect: {
    //     //     id: 3,
    //     //   },
    //     // },
    //     message: "HOLAHOALHOALA",
    //   },
    // });
  }

  // TODO: +++++++++++++++ USER STORE +++++++++++++++
  async function mainUserStore() {
    console.log("mainUserStore");

    // await prisma.userStore.delete({
    //   where: {
    //     id: 1,
    //   },
    // });

    // await prisma.userStore.upsert({
    //   where: {
    //     userId: 3,
    //   },
    //   update: {
    //     userId: 3,
    //   },
    //   create: {
    //     userId: 3,
    //     displayName: "store1",
    //   },
    // });
  }

  // TODO: +++++++++++++++ USER CUSTOMER +++++++++++++++
  async function mainUserCustomer() {
    console.log("mainUserCustomer");

    // await prisma.user.delete({
    //   where: {
    //     id: 1,
    //   },
    // });

    //USER
    // const user = await prisma.user.create({
    //   data: {
    //     name: "sarasd",
    //     surname: "PrisAASDma",
    //     mail: "sarahASDSD@prisma.io",
    //     phone: "01144446666",
    //     password: "password",
    //     username: "sarahprismaASD",
    //     address: {},
    //     userType: "CUSTOMER",
    //   },
    // });

    // await prisma.userCustomer.upsert({
    //   where: {
    //     userId: 4,
    //   },
    //   update: {
    //     userId: 4,
    //     benefitsActive: {
    //       //   set: [],
    //       connectOrCreate: [
    //         {
    //           where: {
    //             id: 3,
    //           },
    //           create: {
    //             name: "benfecio2",
    //             type: "DISCOUNT",
    //             endDate: new Date().toISOString(),
    //             quantity: 2,
    //             pointsCost: 400,
    //             userStoreId: 1,
    //           },
    //         },
    //       ],
    //     },
    //     benefitsHistory: {
    //       //   set: [],
    //       connectOrCreate: [
    //         {
    //           where: {
    //             id: 2,
    //           },
    //           create: {
    //             name: "benfecio2",
    //             type: "DISCOUNT",
    //             endDate: new Date().toISOString(),
    //             quantity: 2,
    //             pointsCost: 400,
    //             userStoreId: 1,
    //           },
    //         },
    //         {
    //           where: {
    //             id: 3,
    //           },
    //           create: {
    //             name: "benfecio2",
    //             type: "DISCOUNT",
    //             endDate: new Date().toISOString(),
    //             quantity: 2,
    //             pointsCost: 400,
    //             userStoreId: 1,
    //           },
    //         },
    //       ],
    //     },
    //   },
    //   create: {
    //     userId: 4,
    //     benefitsActive: {
    //       //   set: [],
    //       connectOrCreate: [
    //         {
    //           where: {
    //             id: 3,
    //           },
    //           create: {
    //             name: "benfecio2",
    //             type: "DISCOUNT",
    //             endDate: new Date().toISOString(),
    //             quantity: 2,
    //             pointsCost: 400,
    //             userStoreId: 1,
    //           },
    //         },
    //       ],
    //     },
    //     benefitsHistory: {
    //       //   set: [],
    //       connectOrCreate: [
    //         {
    //           where: {
    //             id: 2,
    //           },
    //           create: {
    //             name: "benfecio2",
    //             type: "DISCOUNT",
    //             endDate: new Date().toISOString(),
    //             quantity: 2,
    //             pointsCost: 400,
    //             userStoreId: 1,
    //           },
    //         },
    //         {
    //           where: {
    //             id: 3,
    //           },
    //           create: {
    //             name: "benfecio2",
    //             type: "DISCOUNT",
    //             endDate: new Date().toISOString(),
    //             quantity: 2,
    //             pointsCost: 400,
    //             userStoreId: 1,
    //           },
    //         },
    //       ],
    //     },
    //   },
    // });
  }

  // TODO: +++++++++++++++ BENEFIT +++++++++++++++
  async function mainBenefit() {
    console.log("mainBenefit");

    // await prisma.benefit.delete({
    //   where: {
    //     id: 5,
    //   },
    // });

    // await prisma.benefit.upsert({
    //   where: {
    //     id: 4,
    //   },
    //   update: {
    //     name: "",
    //     userCustomerActive: {
    //       set: [],
    //     },
    //   },
    //   create: {
    //     name: "benfecio2",
    //     type: "DISCOUNT",
    //     endDate: new Date().toISOString(),
    //     quantity: 2,
    //     pointsCost: 400,
    //     userStoreId: 1,
    //     userCustomerActive: {
    //       // set: [{}],
    //       // connectOrCreate: [
    //       //   {
    //       //     where: {
    //       //       id: 6,
    //       //     },
    //       //     create: {
    //       //       userId: 3,
    //       //     },
    //       //   },
    //       // ],
    //     },
    //     userCustomerHistory: {
    //       //   set: [],
    //       connectOrCreate: [
    //         {
    //           where: {
    //             id: 6,
    //           },
    //           create: {
    //             userId: 3,
    //           },
    //         },
    //       ],
    //     },
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
  await mainGreenPoint();
  await mainPost();
  await mainPostCommitment();
  await mainChat();
  await mainChatMessage();
  await mainUserStore();
  await mainUserCustomer();
  await mainBenefit();

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
    const arrayFindMany = await prisma.userStore.findMany({
      // include: {
      //   Address: true,
      //   materialComponent: true,
      // },
    });

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
    console.log("arrayFindMany", JSON.stringify(arrayFindMany, null, 2));
  }

  // ! +++++++++++++++ RUN +++++++++++++++
  await mainDisplay();
}

main();

app.get("/", async (req: any, res: any) => {
  return res.json({ message: "Hello World" });
});

const server = app.listen(5000, () => console.log("server ready at 5000"));
