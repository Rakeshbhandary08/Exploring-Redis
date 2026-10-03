const client = require("./client")

async function init(){
     await client.set("user:12","choot")
     console.log(await client.get("user:12"))
     const result=await client.get('user:1');
     console.log("Result ->",result)
     await client.expire("user:12",10)
}

init()
