import { Router } from "express";
import { registerUser } from  "../controllers/user.controller.js"
import {upload} from "../middlewares/multer.middleware.js"

const router = Router()

// to inject middleware, in which method we want to use, add just before it

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
)

export default router  