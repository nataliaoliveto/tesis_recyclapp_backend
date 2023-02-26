export async function mainGreenPoint() {
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
