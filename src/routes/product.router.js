import express from 'express';
import { createproduct } from "../controller/product.controller.js";
import { getallproducts } from '../controller/product.controller.js';
import { getProductbyAdmin } from '../controller/product.controller.js';
import { updateproductcontroller } from '../controller/product.controller.js';
import { deleteproductcontroller } from '../controller/product.controller.js';
import { requireSignin } from "../commom-middleware/index.js";
import { adminMiddleware } from '../commom-middleware/index.js';
const productrouter = express.Router();

productrouter.post('/admin/product',requireSignin,adminMiddleware,createproduct)
productrouter.post('/admin/getallproducts',getallproducts)
productrouter.post('/admin/getproductbyadmin',requireSignin,adminMiddleware,getProductbyAdmin)
productrouter.post('/admin/updateproduct',updateproductcontroller)
productrouter.post('/admin/deleteproduct',deleteproductcontroller)



export default productrouter