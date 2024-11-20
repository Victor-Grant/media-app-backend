import Media from "../model/media.model.js"

const getData = async (req, res) => {
    const data = await Media.find();
    res.json(data);
}

const createData = async (req, res) => {
    const mediaRequest = req.body;
    const media = new Media(mediaRequest);
    media.save();
    res.status(200).json({ 'success': 'true', 'data': mediaRequest});
}

const deleteData = async (req, res) => {
    const {id} = req.params;
    try {
        await Media.findByIdAndDelete(id);
        return res.status(200).json({"success": "true", "deleted": "true"})
    } catch (error) {
        console.error('could not delete data', error.message)
        return res.status(500).json({"message": "server error"});
    }
}

export {getData, createData, deleteData};