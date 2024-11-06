import mongoose from "mongoose";

export default async function conectDb(){
    mongoose.connect("mongodb+srv://TortaTorta:carai@papagaiocristalico.jvsjl.mongodb.net/Spotify?retryWrites=true&w=majority&appName=PapagaioCristalico")

    return mongoose.connection
}