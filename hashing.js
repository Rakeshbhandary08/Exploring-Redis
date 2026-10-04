const client = require("./client");

async function learningHashing() {
  //How to set the field in hashing
  await client.hset("person:1", {
    name: "John",
    age: 25,
    city: "Delhi",
    gender: "male",
  });

  await client.hset('person:2',{name:"Mahek",age:45,city:"kerala",gender:"female"})

  console.log("Done")

  //know the detail
  console.log(await client.hget("person:2","gender"))

  await client.hset('person:2','age',22)

  //Get all the detail
  console.log(await client.hgetall('person:2'))
}

learningHashing();
