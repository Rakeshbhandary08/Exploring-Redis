const client = require("./client")

async function init(){
     await client.set("user:12","Okk")
     console.log(await client.get("user:12"))
     const result=await client.get('user:1');
     console.log("Result ->",result)
     await client.expire("user:12",10)
}

//queue -> FIFO
async function redisList(){
     await client.lpush("subject","Hindi")
     await client.lpush("subject","English")
     await client.lpush("subject","History")

     let result=await client.rpop("subject")
     console.log(result)

}

redisList()
init()
