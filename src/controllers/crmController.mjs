import mongoose from 'mongoose'
import {ProductTable} from '../models/crmModel.mjs'

const Product = mongoose.model('Product', ProductTable)

const addNewProduct = (req,res)=>{
    let newProduct = new Product(req.body);
    newProduct.save((err, product)=>{
        if (err){
            res.send(err)
        }
        res.json(product)
    })
}

export const getProduct = (req,res)=>{
    
    Product.find({},(err,product)=>{
        if (err){
            res.send(err)
        }
        res.json(product)
    })
}

export const getProductWithID = (req,res)=>{
    
    Product.findById(req.params.productID,(err,product)=>{
        if (err){
            res.send(err)
        }
        res.json(product)
    })
}
export const updateProduct = (req,res)=>{
    
    Product.findOneAndUpdate({_id:req.params.productID},req.body,{new:true,useFindAndModify:false},(err,product)=>{
        if (err){
            res.send(err)
        }
        res.json(product)
    })
}

export const deleteProduct = (req,res)=>{
    
    Product.remove({_id:req.params.productID},(err,product)=>{
        if (err){
            res.send(err)
        }
        res.json({message:'Product Deleted Scuccessfully'})
    })
}


export  default addNewProduct;