const app=require("./app")
const dotenv=require("dotenv")
const path= require("path")
const connectDb = require("./config/database")

dotenv.config({path:path.join(__dirname,"config/config.env")})
connectDb();
app.listen(process.env.PORT,()=>{
    console.log(`Server is listening at port ${process.env.PORT} in ${process.env.NODE_ENV}`)
})
