import express from 'express';
import { signin,signup} from '../controller/user.js'
import { adminupdata } from '../controller/user.js';
const adminrouter = express.Router();
// admin router

adminrouter.post('/admin/signin' ,  signin)
 
adminrouter.post('/admin/signup',signup)
adminrouter.post('/admin/update',adminupdata)



export default adminrouter;