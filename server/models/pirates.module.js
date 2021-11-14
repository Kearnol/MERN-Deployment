const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    name: {type:String, required:true},
    img: {type:String, required:true},
    chests: {type:Number, required:true},
    phrase: {type:String, required:true},
    position: {type:String, required:true},
    pegLeg: {type:Boolean, required:true},
    eyePatch: {type:Boolean, required:true},
    hook: {type:Boolean, required:true}
}, {timestamps: true});

const Pirate = mongoose.model('Pirate', PirateSchema);

module.exports = Pirate