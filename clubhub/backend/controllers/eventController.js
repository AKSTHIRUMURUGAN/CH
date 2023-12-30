const Event=require("../models/eventModel")
exports.getEvents=(req,res,next)=>{
 res.status(200).json({
    sucess:true,
    message:"all events are successfully get"
 })
}
exports.newEvent=async(req,res,next)=>{
 const event=await Event.create(req.body)
 res.status(201).json({
   success:true,
   event
 })
}