const router = require('express').Router();
router.route("/Alltodos").get("middleware","controller")
router.route("/Alltodos").post("middleware","controller")
router.route("/Alltodos").put("middleware","controller")
router.route("/Alltodos").delete("middleware","controller")
