var Users = require('../model/AdminSchema');



    exports.searchuser=function(request,response){
    var name1=request.body.name;
    var password1=request.body.password;
    Users.findOne({name:name1,password:password1},function(error,res){
        if(error){
          return   response.json({
        sucess:false,
        body:error
    })
                }
          return     response.json({
        sucess:true,
        body:res
    })
    });
    };




