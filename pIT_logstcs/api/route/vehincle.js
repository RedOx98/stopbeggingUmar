import express from "express";
import { createVehincle, deleteVehincle, getVehincle, getVehincles, updateVehincle } from "../controller/vehincle.js";
import Vehincle from "../models/Vehincle.js";

const router = express.Router();



//CREATE
router.post("/", createVehincle);

//UPDATE
router.put("/:id", updateVehincle)

//DELETE
router.delete("/:id", deleteVehincle);

//GET
router.get("/:id", getVehincle);

//GET ALL
router.get("/", getVehincles);


export default router;