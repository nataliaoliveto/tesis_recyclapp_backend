import { Prisma } from '@prisma/client'

interface PrismaErrorHandler {
  err: Prisma.PrismaClientKnownRequestError
}

// export const prismErrorHandler = ({err}: PrismaErrorHandler) => {
//   if (err.code === 'P2002') {
    
//     return new Error()
//   }
//   return new Error('taka taka')
// }


export const handlePrismaError = (err: Prisma.PrismaClientKnownRequestError) => {
    let errorString = err.meta.target
    if(errorString == "username"){
        errorString = "nombre de usuario"
    }

    switch (err.code) {      
        case 'P2002':
            // handling duplicate key errors
            return new CustomError(`El ${errorString} ya existe. Pruebe con uno diferente`, 400);
        case 'P2014':
            // handling invalid id errors
            return new CustomError(`Invalid ID: ${err.meta.target}`, 400);
        case 'P2003':
            // handling invalid data errors
            return new CustomError(`Ingreso de datos erróneos. Uno o más valores ingresados no son aceptados. Por favor, revíselos e intente nuevamente.`, 400);
        default:
            // handling all other errors
            return new CustomError(`Ocurrió un error. Por favor, vuelve a intentarlo o contacta a tu administrador.`, 500);
    }
  };
  
  class CustomError extends Error {
    constructor(message, public status) {
      super(message);
    }
  } 
