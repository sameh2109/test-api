import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const ProductTable = new Schema({
    title:{
        type:String,
        

    },
    description:{
        type:String,
        
    },
    image:{
        type:String
    },
    rating:{
        type:Number
    },
    price:{
        type:Number
    },
    isFavourite:{
        type:Boolean
    },
    isPopular:{
        type:Boolean
    },
    category:{
        type:String
    },
    createdDate:{
        type:Date,
        default: Date.now
    }
});

