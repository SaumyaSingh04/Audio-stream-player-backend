import express from "express";
import cors from "cors"
import 'dotenv/config'
import songRouter from "./src/routes/song.js";
import connectDb from "./src/config/mongoose.js"
import connectCloudinary from "./src/config/cloudinary.js";

//app config
const app = express()
const port = process.env.PORT || 3001;
connectDb();
connectCloudinary();

//routes
app.use("/api/song",songRouter)

//middleware
app.use(express.json())
app.use(cors())


//routes
app.get('/',(req,res)=> res.send('home page'))

app.listen(port,()=>console.log('server is running on ',port));