var express=require("express");
var router=express.Router();
var uController = require('../Controllers/verify');
var userController= require('../Controllers/addUser');
var dController = require('../Controllers/delete');

router.route('/u1/addUser')
.post(userController.postuser)
.get(userController.getuser);

router.route('/u1/verify')
.post(uController.searchuser)

router.route('/u1/deleteUser')
.post(dController.deleteuser)




// router.route('/u1/update/:name')
// .put(uController.updateuser)
// .delete(uController.deleteuser)
// .get(uController.searchuser);

module.exports = router;