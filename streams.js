const client=require("./client")

async function redisStream(){
    await client.xadd("orders",'*',"userId","101","product","Laptop")
    
     await client.xadd("orders",'*',"userId","103","product","Air buds")
    console.log("Done")

    console.log(await client.xrange("orders","-","+"))
    console.log(await client.xlen("orders"))

    console.log(await client.xread("STREAMS","orders",0))
}

redisStream()

