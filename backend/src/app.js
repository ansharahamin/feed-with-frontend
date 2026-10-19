import postModel from './models/post.model.js'
import multer from "multer"
import express from 'express'
import uploadFile from '../services/storage.service.js'
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(cors())
const storage = multer.memoryStorage()
const upload = multer({storage:storage})
const posts = [{ title: "smit", des: "smitworld", id: 1 }, { title: "neha", des: "nehaworld", id: 2 }, { title: "master", des: "masterworld", id: 3 }]

app.get('/', async (req, res) => {
    try {
        const posts = await postModel.find()
        if (posts.length === 0) {
          return  res.status(404)
                .json({ message: 'no posts found' })
        }
        res.status(200).json({ message: 'post fetched successfully', posts })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }

})

// app.post('/posts', (req, res) => {
//     console.log(req.body)
//     posts.push({ id: posts.length + 1, ...req.body })
//     res.send({ message: "post added successfully" })
// })

app.post('/posts',async (req,res)=>{
    const data = req.body
    try {
        if(!data.title || !data.des){
          return  res.status(400).json({message:'bad request'})
        }
      const posts =  await postModel.create({
            title:data.title,
            des:data.des
        })
        res.status(201).json({message:'posts sent successfully'},posts)
    } catch (error) {
        res.status(500).json({message:'internal server error'})
    }
})
//img upload
app.post('/upload', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'image is required' })
        }
        const result = await uploadFile(req.file.buffer)
        const post = await postModel.create({
            image: result.url,
            des: req.body.des
        })
        res.status(200).json({ message: 'img added', post })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//express delete
// app.delete('/posts/:id', (req, res) => {
//     let index = posts.findIndex(v => v.id == Number(req.params.id))
//     posts.splice(index, 1)
//     res.send({ message: 'user deleted successfully' })
// })

//mongodb delete
app.delete('/posts/:id',async (req,res)=>{
    const id = req.params.id
    try {
    
        const postDeleted = await postModel.findByIdAndDelete(id)
            if(!postDeleted){
            return res.status(404).json({message:"post not found"})
        }
        res.status(200).json({message:"post deleted successfully"})
    } catch (error) {
        res.status(500).json({message:"internal server error"})
    }
})

//mongodb update
app.put('/posts/:id',async (req,res)=>{
    try {
           const id = req.params.id
    const data = req.body
    if(!data.title||!data.des){
        return res.status(400).json({message:"title and des are required"})
    }
const updatedPost = await postModel.findByIdAndUpdate(id,{title:data.title,des:data.des},{ new: true })
if(!updatedPost){
    return res.status(404).json({message:"post not found"})
}
    res.status(200).json({message:'post updated successfully'},updatedPost) 
    } catch (error) {
        res.status(500).json({message:error.message})
    }

})

//express update
// app.put('/posts/:id', (req, res) => {
//     let index = posts.findIndex(v => v.id == Number(req.params.id))
//     posts.splice(index, 1, { id: Number(req.params.id), ...req.body })
//     res.send({ message: 'user updated successfully' })
// })
// app.get('/posts', (req, res) => {
//     res.send(posts)

// })
export default app