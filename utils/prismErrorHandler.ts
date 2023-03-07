import { Prisma } from '@prisma/client'

interface PrismaErrorHandler {
  err: Prisma.PrismaClientKnownRequestError
}

export const prismErrorHandler = ({err}: PrismaErrorHandler) => {
  if (err.code === 'P2002') {
    let errorString = err.meta.target[0]
    if(errorString === 'username'){
        errorString = 'nombre de usuario'
    }
    return new Error('Ya hay un usuario registrado con el: ' + errorString + '. Pruebe con uno diferente')
  }
  return new Error('taka taka')
}


const handlePrismaError = (err: Prisma.PrismaClientKnownRequestError) => {
    switch (err.code) {
        case 'P2002':
            // handling duplicate key errors
            return new CustomError(`Duplicate field value: ${err.meta.target}`, 400);
        case 'P2014':
            // handling invalid id errors
            return new CustomError(`Invalid ID: ${err.meta.target}`, 400);
        case 'P2003':
            // handling invalid data errors
            return new CustomError(`Invalid input data: ${err.meta.target}`, 400);
        default:
            // handling all other errors
            return new CustomError(`Something went wrong: ${err.message}`, 500);
    }
  };
  
  class CustomError extends Error {
    constructor(message, public status) {
      super(message);
    }
  } 
