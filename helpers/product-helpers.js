var db = require('../config/connection')
var collection = require('../config/collection')

module.exports={
    addProduct:((product,callback)=>{
        db.get().collection(collection.PRODUCT_COLLECTION).insertOne(product).then((data)=>{
            console.log(data);
            callback(product._id)
        })
    })
}