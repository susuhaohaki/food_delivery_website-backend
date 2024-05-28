import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import "dotenv/config"
import cartRoute from './routes/cartRoute.js';
import orderRoute from './routes/orderRoute.js';

//app config
const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();

//api endpoints
app.use('/api/food', foodRouter)
app.use('/image', express.static('uploads'))
//api user
app.use('/api/user', userRouter)
//api cart
app.use('/api/cart', cartRoute)
//api place order
app.use('/api/order', orderRoute)

app.get("/", (req, res) => {
    res.send('API Working')
})



app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://nguyenhai250203:<password>@cluster0.lthj4o1.mongodb.net/?