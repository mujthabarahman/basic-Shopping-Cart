var express = require('express');
var router = express.Router();
var productHelpers = require("../helpers/product-helpers")

/* GET home page. */
router.get('/', function(req, res, next) {
  productHelpers.getAllProducts().then((products)=>{
    res.render('admin/view-products', { admin: true, products});
  })
});
router.get('/add-product',(req,res)=>{
  res.render('admin/add-product',{admin: true});
})
router.post('/add-product',(req,res)=>{
  console.log(req.body), {admin: true};
  console.log(req.files);
  productHelpers.addProduct(req.body,(id)=>{
    let image=req.files.image;
    console.log(id);
    image.mv('./public/images/'+id+'.jpg',(err)=>{
      if(!err){
        res.render('admin/add-product')
      }else{
        console.log(err)
      }
    })
    res.render('admin/add-product', {admin: true})
  })
})

module.exports = router;
