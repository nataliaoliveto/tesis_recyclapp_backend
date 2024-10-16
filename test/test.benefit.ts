export async function mainBenefit() {
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
