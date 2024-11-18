import express from "express"

import connectDB from "./source/config/db.js"
import Media from "./source/model/media.model.js"

const app = express();

app.use(express.json());



app.get('/api/data', async (req, res) => {
    const data = await Media.find();
    res.json(data);
})

app.post('/api/data', async (req, res) => {
    const mediaRequest = req.body;
    const media = new Media(mediaRequest);
    media.save();
    res.status(200).json({ 'success': 'true', 'data': mediaRequest});
})

app.delete('/api/data/:id', async (req, res) => {
    const {id} = req.params;
    try {
        await Media.findByIdAndDelete(id);
        return res.status(200).json({"success": "true", "deleted": "true"})
    } catch (error) {
        console.error('could not delete data', error.message)
    }
})

connectDB().then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log('server listening on port 5000')
    })
})


