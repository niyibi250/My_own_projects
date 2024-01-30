let {MongoClient} = require('mongodb')

let newclient = new MongoClient('mongodb://localhost:27017/')
async function retrivedata()
{    
    try{
        await newclient.connect()

        let database = newclient.db('ericfirstdatabase')
        let collection= database.collection('products')
        let result = await collection.find({}).toArray()
        console.log(result)
        
    }
    catch(error){
    console.error('some goes wrong:\n',error)
    }
    finally{
        await newclient.close()
        console.log('connection has to be closed')
    }
}
retrivedata()