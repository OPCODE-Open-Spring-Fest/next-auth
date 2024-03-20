const {Router} = require("express")
const signUp = require("../controller/signUp.js")
const login = require("../controller/login.js");
const auth = require("../controller/auth.js");
const router = Router()

router.post("/signUp",signUp)
router.post("/login",login)
router.post("/auth",auth)

module.exports = router
