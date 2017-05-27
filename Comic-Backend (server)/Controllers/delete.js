var Users = require('../model/AdminSchema');

exports.deleteuser=function(request,response){

 var id=request.body.id;

    Users.findOne({_id:id},function(error,res){
       
         if(error){
            response.json(error);
        }
        console.log(res);
       if(res){
           
           res.remove({_id:id},function(error)
             {
               if(error){
               response.json(error);
            }
                response.json("sucessfully deleted");
           })
       }else{
           response.json("User does not exist");
       }


});
};
