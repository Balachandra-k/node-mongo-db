// const mongodb = require('mongodb')

// const assert = require('assert')

// const URL =`mongobd://localhost:27017`

// mongodb.m

const {MongoClient,ServerApiVersion} = require('mongodb')

const assert =require('assert')

//url

const server_url = 'mongodb+srv://balachandra:balu_6789@bacth-10-12.jn3x2by.mongodb.net/?retryWrites=true&w=majority'

//ref

const options = {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
}

const client = new MongoClient(server_url)

async function main(){
    await client.connect()
    console.log(`mongobd connected succefully`)
    return`..done`
}

main()
.then(res =>{
    console.log(res)
})
.catch(err=>{
    console.log(err)
}).finally(()=> client.close())