import addNewProduct from '../controllers/crmController.mjs'
import {getProduct,getProductWithID,updateProduct,deleteProduct} from '../controllers/crmController.mjs'
const routes = (app)=>{
    app.route('/product')
        .get((req,res,next)=>{
            //middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next()
        }, getProduct)
        
        .post(addNewProduct)
    app.route('/product/:productID')
        .get(getProductWithID) 
        .put(updateProduct)
        .delete(deleteProduct)
}

export default routes;