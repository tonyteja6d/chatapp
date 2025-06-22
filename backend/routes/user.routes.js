import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { gerUsersForSidebar } from "../controlers/user.controller.js";

const router = express.Router();

router.get("/",protectRoute,gerUsersForSidebar)

export default router;