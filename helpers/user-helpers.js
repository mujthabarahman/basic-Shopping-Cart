const collection = require('../config/collection')
const db=require('../config/connection')
const bcrypt = require('bcrypt')
module.exports={
    doSignup:(userData)=>{
        return new Promise(async(resolve,reject)=>{
            userData.password=await bcrypt.hash(userData.password,10)
            db.get().collection(collection.USERS_COLLECTION).insertOne(userData).then((data)=>{
                resolve(data)
            })
        })
    },
    doLogin:(userData)=>{
        return new Promise(async(resolve,reject)=>{
            var response={}
            let user=await db.get().collection(collection.USERS_COLLECTION).findOne({email: userData.email})
            if(user){
                bcrypt.compare(userData.password,user.password).then((status)=>{
                    if(status){
                        console.log('login success');
                        response.user=user;
                        response.status=true;
                        resolve(response)
                    }else{
                        console.log('login failed');
                        resolve({status:false})
                    }
                })
            }else{
                resolve({status:false})
            }
        })

    }
}