import express from "express";
// import swaggerUi from "swagger-ui-express";
// import OpenApiValidator from "express-openapi-validator";
import cors from "cors";
import userRouter from "./routes/user.routes";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use("/users", userRouter);
// app.use('/swagger', swaggerUi.serve, swaggerUi.setup(null, { swaggerOptions: { url: '/swagger.json' } }));

// app.use(OpenApiValidator.middleware({
//   apiSpec,
//   validateRequests: true,
//   validateResponses: true
// }));

async function main() {
  await prisma.user.deleteMany();
  await prisma.address.deleteMany();
  // await prisma.address.delete({
  //   where: {
  //     id: 14,
  //   },
  // });
  // await prisma.user.delete({
  //   where: {
  //     id: 22,
  //   },
  // });
  // const users = await prisma.user.findMany({
  //   include: {
  //     address: true,
  //   },
  // });
  // console.log("users", JSON.stringify(users, null, 2));
  // await prisma.user.findUnique({
  //   where: {
  //     id: 22,
  //   },
  // })
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
  await prisma.user.create({
    data: {
      name: "Elsa",
      surname: "Prisma",
      mail: "elsa@prisma.io",
      phone: "01144446666",
      password: "password",
      username: "elsaprisma",
      address: {
        create: {
          city: "Istanbul",
          flat: "1",
          street: "Istiklal",
          latitude: 41.01384,
          longitude: 28.94966,
          postalCode: "34433",
          state: "Istanbul",
        },
      },
    },
    include: {
      address: true,
    },
  });
  await prisma.user.create({
    data: {
      name: "Sarah",
      surname: "Prisma",
      mail: "sarah@prisma.io",
      phone: "01144446666",
      password: "password",
      username: "sarahprisma",
      address: {},
    },
  });
}

main();

app.get("/", async (req: express.Request, res: express.Response) => {
  return res.json({ message: "Hello World" });
});

const server = app.listen(5000, () => console.log("server ready at 5000"));
