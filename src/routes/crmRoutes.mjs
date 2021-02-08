import addNewContact from '../controllers/crmController.mjs'
import {getContact,getContactWithID,updateContact,deleteContact} from '../controllers/crmController.mjs'
const routes = (app)=>{
    app.route('/contact')
        .get((req,res,next)=>{
            //middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next()
        }, getContact)
        
        .post(addNewContact)
    app.route('/contact/:contactID')
        .get(getContactWithID) 
        .put(updateContact)
        .delete(deleteContact)
}

export default routes;