import express from 'express';
import Connection from './database/db.js';
import env from 'dotenv'
import cors from 'cors'
import adminrouter from './routes/user.js';
import categoryroute from './routes/category.router.js';
import productrouter from './routes/product.router.js';


import path from 'path';
// envernoment variable 
const app = express();

env.config();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cors())

app.use(express.json())

app.use("/api", adminrouter)
app.use("/api", categoryroute)
app.use("/api", productrouter)


app.listen(process.env.PORT, () => {
  console.log(`SERVER IS RUNNING ${process.env.PORT}`)
})

Connection()