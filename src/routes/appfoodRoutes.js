import express from "express";
import {
  getLikeOfappfood,
  getappfood,
  likeappfood,
  unlikeappfood,
  getRateappfood,
  rateappfood,
  getUserRate,
  order,
  getalluser,
} from "../controller/appFoodController.js";

const appfoodRoute = express.Router();

appfoodRoute.get("/user", getalluser);
appfoodRoute.get("/get", getappfood);
appfoodRoute.post("/like", likeappfood);
appfoodRoute.post("/unlike", unlikeappfood);
appfoodRoute.get("/get-like", getLikeOfappfood);
appfoodRoute.get("/get-rate", getRateappfood);
appfoodRoute.get("/get-user-rate", getUserRate);
appfoodRoute.post("/rate", rateappfood);
appfoodRoute.post("/order", order);

export default appfoodRoute;
