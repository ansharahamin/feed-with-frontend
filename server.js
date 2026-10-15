import express from 'express'
import app from './src/app.js'
import connectedDB from "./src/db/db.js"

const PORT = 3000
connectedDB()


app.listen(PORT,()=>{
    console.log('server is running on port '+PORT)
})