const mongoose=require("mongoose");
const connectDb=()=>{
    mongoose.connect(process.env.MDB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(con=>{
        console.log(`mdb connecte to host : ${process.env.MDB_URL}`)
    }).catch((err)=>{
        console.log(err)
    })
}
 module.exports= connectDb;