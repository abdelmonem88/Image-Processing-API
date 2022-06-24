import express from "express";
import resizeRoutes from "./resize/index";

const router = express.Router();
router.use("/resize", resizeRoutes);

export default router;
