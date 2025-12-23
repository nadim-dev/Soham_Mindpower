const express = require("express");
const {createEnquiry,getAllEnquiries} = require("../controllers/enquiryController");

const {authenticateToken,allowRoles} = require("../middleware/auth");

const router = express.Router();



// public
router.post("/", createEnquiry);

// admin

router.get("/", authenticateToken, allowRoles("admin"), getAllEnquiries);

module.exports = router;