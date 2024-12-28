import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongoDb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'

//App config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

//middleweare
app.use(express.json());
app.use(cors());

//api endpoitnts
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)


app.get('/',(req,res)=>{
    res.send('API Working ')
})

app.listen(port, ()=> console.log('server started on PORT : ' + port))