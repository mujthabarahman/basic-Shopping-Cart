
var express = require('express');
const productHelpers = require('../helpers/product-helpers');
var userHelpers = require('../helpers/user-helpers')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let user=req.session.user;
  productHelpers.getAllProducts().then((products)=>{
    res.render('users/all-products',{products,user});
  })
});
router.get('/signup',(req,res)=>{
  res.render('users/signup-page')
})
router.post('/signup',(req, res)=>{
  userHelpers.doSignup(req.body).then((response)=>{
    console.log(response)
  })
})
router.get('/login',(req,res)=>{
  res.render('users/login-page')
})
router.post('/login',(req,res)=>{
  userHelpers.doLogin(req.body).then((response)=>{
    if(response.status){
      req.session.user=response.user;
      req.session.loggedIn=true;
      res.redirect('/')
    }else{
      res.redirect('/login')
    }
  })
})
router.get('/logout',(req,res)=>{
  req.session.destroy()
  res.redirect('/login')
})

module.exports = router;
