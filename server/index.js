const express = require('express')
const dotenv = require("dotenv")
const mongoose = require('mongoose')
const router = require('./routes/products')
const app = express()
const port = 3000
const productRouter = require('./routes/products')
const authRouter = require('./routes/auth')
const userRouter = require('./routes/user')
const cartRouter = require('./routes/cart')
const orderRouter = require('./routes/order')
const cors = require('cors')

dotenv.config()
mongoose.connect(process.env.MONGO_URL).then(()=>console.log("db connected")).catch((err)=>console.log(err))

app.use(cors())

app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({limit: '10mb', extended: true}));


app.use('/api/products', productRouter)
app.use('/api/', authRouter)
app.use('/api/user', userRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.listen(process.env.PORT || port, () => console.log(`App is listening on port ${process.env.PORT}!`))

