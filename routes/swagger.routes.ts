import { Router } from "express";
// import userController from "../controllers/user.controller";

const swaggerDocOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Recyclapp API",
      version: "1.0.0",
      description:
        "A simple REST API for providing basic CRUD-access to Recyclapp database",
    },
  },
  apis: ["../controllers/*.ts"],
};

// const apiSpec = swaggerJsDoc(swaggerJsDocOptions);

const router = Router();

// router.get("/swagger.json", (req, res) => res.json(apiSpec));

export default router;
