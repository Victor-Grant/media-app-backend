import express from "express"

import connectDB from "./source/config/db.js"

import { getData, createData, deleteData } from "./source/controller/method.controller.js";

const app = express();

app.use(express.json());



app.get('/api/data', getData)

app.post('/api/data', createData)

app.delete('/api/data/:id', deleteData)

connectDB().then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log('server listening on port 5000')
    })
})


