const client=require("./client")

async function redisGeo(){
    await client.geoadd("restaurants",123.2,80.00,"restaurants1")
}

redisGeo()