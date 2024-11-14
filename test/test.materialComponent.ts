export async function mainMaterialComponent() {
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
}
