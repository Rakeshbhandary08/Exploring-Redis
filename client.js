const {Redis} = require('ioredis')

const client=new Redis()  //connection establish to redis server

module.exports=client


