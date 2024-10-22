export async function mainUser() {
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
  //     id: "cle0gegsm0000v8dwm58hlynv",
  //   },
  //   data: {
  //     imageId: "cle0gipph0000v8f84s5uycmc",
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
