import handler from 'express-async-handler';
// import { router } from 'express';
import express from "express"
const router = express.Router();
 import { TableModel } from '../models/table.model.js';

router.get("/",handler(async(req,res)=>{
    const tables = await TableModel.find({})
    res.send(tables)
}));

export default router;