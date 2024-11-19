import { Router } from "express";
import userCustomerController from "../controllers/userCustomer.controller";
import userStoreController from "../controllers/userStore.controller";

const router = Router();

router.get("/userCustomers", userCustomerController.getUserCustomers);
router.get("/userCustomer/:id", userCustomerController.getUserCustomer);
router.get(
  "/userCustomerClerk/:id",
  userCustomerController.getUserCustomerClerk
);
router.post("/userCustomer", userCustomerController.createUserCustomer);
router.put("/userCustomer/:id", userCustomerController.updateUserCustomer);
router.delete("/userCustomer/:id", userCustomerController.deleteUserCustomer);

router.get("/userStores", userStoreController.getUserStores);
router.get("/userStore/:id", userStoreController.getUserStore);
router.get("/userStoreClerk/:id", userStoreController.getUserStoreClerk);
router.post("/userStore", userStoreController.createUserStore);
router.put("/userStore/:id", userStoreController.updateUserStore);
router.delete("/userStore/:id", userStoreController.deleteUserStore);

export default router;
