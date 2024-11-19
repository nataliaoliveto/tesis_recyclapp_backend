import { Router } from "express";
import addressController from "../controllers/address.controller";

const router = Router();

router.get("/addresses", addressController.getAddresses);
router.get("/addressesByUser/:id", addressController.getAddressClerk);
router.get("/address/:id", addressController.getAddress);
router.post("/address", addressController.createAddress);
router.put("/address/:id", addressController.updateAddress);
router.delete("/address/:id", addressController.deleteAddress);

export default router;
