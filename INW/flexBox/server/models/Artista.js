import mongoose from "mongoose";

const artistaSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    name: {type: String, required: true},
    song: {type: String}
})

const artista = mongoose.model('artistas', artistaSchema)

export default artista