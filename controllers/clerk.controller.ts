import { clerkClient } from "@clerk/clerk-sdk-node";
import type { Request, Response } from "express";

const clerkController = {
  async getUserById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const userData = await clerkClient.users.getUser(id);
      const filteredData = {
        id: userData.id,
        username: userData.username,
        // firstName: userData.firstName,
        // lastName: userData.lastName,
      };

      res.status(200).json(filteredData);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
export default clerkController;
