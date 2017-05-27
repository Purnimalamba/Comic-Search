var season_mongoose = require('mongoose');

var schema_season= new mongoose.Schema({
    name:{type:String},
    description:{type:Number},
    starts_on:{type: Date},
    ends_on:{type: Date},
    created_at: {type: Date, default: Date.now},
    updated_at: Date


});

module.exports=mongoose.model('seasonSchema',schema_season);