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
