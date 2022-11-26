const mongoose = require('mongoose');

const replaySchema = new mongoose.Schema({
    history: [],
    result: {
        type: String
    },
    field:{
        type:Number
    },
    lastMove:{
         type:Number
    }

});

const replayModel = mongoose.model('replays', replaySchema)

module.exports = replayModel;