import express from "express";
import appfoodRoutes from "./appfoodRoutes.js";
const rootRoute = express.Router();

rootRoute.use("/appfood", appfoodRoutes);

export default rootRoute;
