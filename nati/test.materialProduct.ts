export async function mainMaterialProduct() {
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
