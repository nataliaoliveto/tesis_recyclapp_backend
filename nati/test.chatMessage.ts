export async function mainChatMessage() {
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
