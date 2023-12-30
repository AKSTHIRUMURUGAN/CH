const mongoose =require("mongoose")
const eventSchema=new mongoose.Schema({
    clubName:{
        type:String,
        required:[true,"please Enter Club Name"],
        trim:true,
        maxLength:[100,"Product Can't exceed 100 characters"]
    },
    eventName:{
        type:String,
        required:[true,"please Enter Event Name"],
        maxLength:[100,"Product Can't exceed 100 characters"]
    },   
    description:{
       type:String,
       required:[true,"Please enter event description"]
    },
    venue: {
        type:String,
        required:[true,"Please enter event venue"]
     },
    capacity: {
        type:Number,
        default:0,
    },
    date: Date,
    time: String,
    eventImages:[
        { image:{
             type:String,
             required:[true,"please upload event image"]
         }}
     ],
     hodLetter:[
        { image:{
             type:String,
             required:[true,"please upload hod letter"]
         }}
     ],  
     guestLetter:[
        { image:{
             type:String,
             required:[true,"please upload guest letter"]
         }}
     ],  
     ratings:{
        type:String,
        default:0
    },
    price:{
        type:Number,
        default:0.0
    },
     noOfReviews:{
        type:Number,
        default:0
    },
    reviews:[{
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'user'
        },
        rating:{
            type:String,
            required:true
        },
        comment:{
            type:String,
            required:true
        }
    }],
    user:{
        type:mongoose.Schema.Types.ObjectId
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }


    
})
let schema=mongoose.model('event',eventSchema)
module.exports=schema;
