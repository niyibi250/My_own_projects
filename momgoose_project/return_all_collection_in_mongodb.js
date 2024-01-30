let {MongoClient} = require('mongodb')

let client = new MongoClient('mongodb://localhost:27017/ericfirstdatabase')
let name_of_database = 'ericfirstdatabase'
let name_of_collection = 'products'

async function startdatabaseconnection()
{
  try{
    await client.connect()
    let database=client.db(name_of_database)
    let result =await database.listCollections().toArray()
   result.forEach(function(collect,index)
   {
    console.log(collect.name)
   })
  }
  catch(error){
    console.log('samething went wrong')
  }
  finally{
    await client.close()
    console.log('the connection has to be closed')
  }
}

startdatabaseconnection()


