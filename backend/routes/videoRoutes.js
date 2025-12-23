const express= require('express');
const {addVideo,getVideos}=require("../controllers/videoController.js");
const { authenticateToken, allowRoles } = require('../middleware/auth.js');

const router = express.Router();


// add vedios
router.post("/",authenticateToken,allowRoles("admin"),addVideo);


// Patients
router.get("/", getVideos);


module.exports = router;
