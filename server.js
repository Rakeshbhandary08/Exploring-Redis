const express=require('express')
const client=require('./client')

const axios=require('axios').default

const app=express()
app.use(express.json())

app.get("/",async (req,res)=>{
    const cacheValue=await client.get('todos')

    if(cacheValue){
        return res.json(JSON.parse(cacheValue))
    }

   const {data}=await axios.get("https://jsonplaceholder.typicode.com/posts/")
   await client.set('todos',JSON.stringify(data))
   await client.expire('todos',30) //ALways give TTL to the cached data
   return res.json(data)


})

app.listen(9000,()=>{
    console.log("server is running")
})