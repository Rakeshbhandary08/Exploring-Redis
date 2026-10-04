const client=require("./client")

async function sortedSets(){
   await client.zadd("rank",10,"suresh")
   await client.zadd('rank',8,"monu")
   await client.zadd('rank',1,"rakesh")

   await client.zadd('rank',15,'tanjiro')
   await client.zadd('rank',2,"Anjali")

   console.log(await client.zrange('rank',0,-1))
   console.log(await client.zrevrange('rank',0,-1))
   console.log(await client.zrank('score','rakesh'))
}

sortedSets()

