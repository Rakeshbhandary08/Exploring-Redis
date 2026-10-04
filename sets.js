const client=require("./client")

async function learningSets(){
    await client.sadd('tags', 'javascript', 'nodejs', 'mongodb');
    console.log("Done")

    //checking for the availability
    console.log(await client.sismember('tags',"javascript"))

    //Get all the members
    console.log(await client.smembers('tags'))

    //Remove the member
    console.log(await client.srem('tags',"nodejs"))

    //Get all the members
    console.log(await client.smembers('tags'))

    await client.sadd("tags","golang")
    await client.sadd("tags","reactjs")

    //Know the size of the set
    console.log(await client.scard('tags'))

}

learningSets()