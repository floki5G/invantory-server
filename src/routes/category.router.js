import express from 'express';
import { categorycontoller } from '../controller/category.controller.js';
import { getcontroller } from '../controller/category.controller.js';
import { updatecatecontroller } from '../controller/category.controller.js';
import { deletecatecontroller } from '../controller/category.controller.js';

const categoryroute = express.Router();

categoryroute.post('/category', categorycontoller)
categoryroute.post('/getcategory', getcontroller)
categoryroute.post('/updatecategory', updatecatecontroller)
categoryroute.post('/deletecategory', deletecatecontroller)

export default categoryroute

