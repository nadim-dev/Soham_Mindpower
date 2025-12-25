const express=require("express");
const { authenticateToken } = require("../middleware/auth");
const { getMessage, sendMessage } = require("../controllers/chatController");
const router=express.Router();


router.get("/",authenticateToken,getMessage);

router.post("/",authenticateToken,sendMessage);

module.exports=router;