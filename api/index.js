const mongoose = require('mongoose')
const cors = require('cors')
const express = require('express')
const dotenv = require('dotenv')
const config = require('../config')
const replays = require('../src/replayModel')

const app = express()
app.use(express.json())
app.use(cors())

dotenv.config()

// app.use(async (req, res, next) => {
//     try {
//         await mongoose.connect(config.mongoUri);
//         next();
//     } catch (error) {
//         console.log(error);
//         res.status(500).send(process.env.MONGO_URI);
//     }
// });

if (config.isVercel) {
    app.use(async (req, res, next) => {
        await mongoose.connect(config.mongoUri);
        return next();
    });
}

app.post('/saveReplay', async (req, res) => {
    const { history, result, field ,lastMove} = req.body
    console.log(req.body)

    const newReplay = {
        history: history,
        result: result,
        field: field,
        lastMove:lastMove
    }

    const replay = new replays(newReplay)
    await replay.save();
    res.send('Done')
})

app.get('/listReplay', async (req, res) => {
    const list = await replays.find()
    res.send(list)
})

app.get('/getReplay/:_id', async (req, res) => {
    const { _id } = req.params
    const replay = await replays.findOne(
        { _id: _id }
    )
    res.send(replay)
})

module.exports = app