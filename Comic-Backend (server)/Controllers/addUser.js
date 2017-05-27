var Users = require('../model/AdminSchema');

exports.postuser=function(request,response){

    var user=new Users({
        name:request.body.name,
        password:request.body.password,
        Role:request.body.role
        

    });

    user.save(function(error,res){
        if (error){
        return response.json(error);
    }
    response.json({
        sucess:true,
        body:res
    })

    });

};

exports.getuser=function(request,response){
Users.find({},function(error,res)

{
        if (error){
        return response.json(error);
    }

    response.json(res);
});
};




