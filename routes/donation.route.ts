import { Router } from "express";
import donationController from "../controllers/donation.controller";

const router = Router();

router.get("/donations", donationController.getDonations);
router.get("/donation/:id", donationController.getDonation);
router.post("/donation", donationController.createDonation);
router.put("/donation/:id", donationController.updateDonation);
router.put("/donation/", donationController.upsertDonation);
router.delete("/donation/:id", donationController.deleteDonation);

export default router;
