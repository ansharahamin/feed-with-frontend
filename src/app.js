import { log } from 'console'
import express from 'express'
const app = express()
app.use(express.json())
const posts = [{title:"smit",des:"smitworld",id:1},{title:"neha",des:"nehaworld",id:2},{title:"master",des:"masterworld",id:3}]
app.get('/',(req,res)=>{
res.send('Hello World')
})

app.post('/posts',(req,res)=>{
console.log(req.body)
posts.push({id:posts.length+1,...req.body})
res.send({message:"post added successfully"})
})
app.delete('/posts/:id',(req,res)=>{
    let index = posts.findIndex(v => v.id == Number(req.params.id))
    posts.splice(index,1)
    res.send({message:'user deleted successfully'})
})
app.put('/posts/:id',(req,res)=>{
    let index = posts.findIndex(v => v.id == Number(req.params.id))
    posts.splice(index,1,{id:Number(req.params.id),...req.body})
    res.send({message:'user updated successfully'})
})
app.get('/posts',(req,res)=>{
res.send(posts)

})
export default app