import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controller/user.js";
import { verifyDriver, verifyToken, verifyUser } from "../controller/utils/verify.js";
const router = express.Router();

router.get("/getAuthentication", verifyToken, (req, res, next)=> {
    res.json("hello user. you are authenticated!")
})

router.get("/checkuser/:id", verifyUser, (req, res, next)=> {
    res.json("hello user. you are authenticated and you can delete your account!")
});

router.get("/checkdriver/:id", verifyDriver, (req, res, next)=> {
    res.json("hello user. you are authenticated and you can delete your account!");
});


//UPDATE
router.put("/:id", updateUser);

//DELETE
router.delete("/:id", deleteUser)

//GET ONE
router.get("/:id", getUser);

//GET ALL
router.get("/", getUsers);


export default router;