import express from "express";
import exampleController from "../controller/example.controler.js";
import verifyToken from "../middleware/jwt.token.middleware.js";

const router = express.Router();

router.get("/verifyToken", verifyToken, exampleController.securedExempleProcess);

router.get("/protected", verifyToken, (req, res) => {
    res.status(200).send({ message: "Protected route accessed successfully" });
})

export default router;
