const express=require("express")
const { getEvents, newEvent } = require("../controllers/eventController")
const router=express.Router()
router.route("/events").get(getEvents)
router.route("/event/new").post(newEvent)
module.exports=router;