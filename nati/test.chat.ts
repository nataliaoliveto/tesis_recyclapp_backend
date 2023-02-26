export async function mainChat() {
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
