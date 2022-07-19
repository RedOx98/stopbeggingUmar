import Vehincle from "../models/Vehincle.js";

export const createVehincle = async (req, res, next) => {
    const newVehincle = new Vehincle(req.body)
    try {
        const savedVehincle = await newVehincle.save();
        res.status(200).json(savedVehincle);
    } catch (err) {
        next(err);
    }
}


//UPDATE
export const updateVehincle = async (req, res, next) => {
    try {
        const updatedVehincle = await Vehincle.findByIdAndUpdate(req.params.id, { $set: req.body }, {new: true})
        res.status(200).json(updatedVehincle);
    } catch (err) {
        next(err);
    }
}

//DELETE
export const deleteVehincle = async (req, res, next) => {
    try {
        await Vehincle.findByIdAndDelete(req.params.id)
       res.status(200).json("Deleted Successfully....");
   } catch (err) {
       next(err);
   }
}

//GET ONE
export const getVehincle = async (req, res, next) => {
    try {
        const vehincle = await Vehincle.findById(
            req.params.id
            );
        res.status(200).json(vehincle);
    } catch (err) {
        next(err);
    }
}

//GET ALL
export const getVehincles = async (req, res, next) => {
    try {
        const vehincles = await Vehincle.find();
        res.status(200).json(vehincles);
    } catch (err) {
        // res.status(500).json(err);
        next(err);
    }
}