const client =require("./client")

async function redisList(){
     await client.lpush("subject","Hindi")
     await client.lpush("subject","English")
     await client.lpush("subject","History")

     // let result=await client.rpop("subject")
     // console.log(result)
     //  let result2=await client.rpop("subject")
     // console.log(result2)
     //  let result3=await client.rpop("subject")
     // console.log(result3)

     //Blocking comman
     // let block=await client.blpop("subject",10)
     // console.log(block)

}

redisList()

async function leftPop(){
     console.log(await client.lrange("subject",0,-1))
      console.log(await client.del("subject"))
      console.log(await client.lrange("subject",0,-1))


}
//leftPop()