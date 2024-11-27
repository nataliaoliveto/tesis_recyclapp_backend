import { Prisma } from "@prisma/client";

interface PrismaErrorHandler {
  err: Prisma.PrismaClientKnownRequestError;
}

export const prismErrorHandler = ({ err }: PrismaErrorHandler) => {
  if (err.code === "P2002") {
    let errorString = err.meta.target[0];
    if (errorString === "username") {
      errorString = "nombre de usuario";
    }
    return new Error(
      "Ya hay un usuario registrado con el: " +
        errorString +
        ". Pruebe con uno diferente"
    );
  }
  return new Error("Error");
};
