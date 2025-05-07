import { MongoClient } from 'mongodb'
import { customerService } from './services/customer.service.js'

// Connection URL
const url = 'mongodb://localhost:27017'

// Database Name
const dbName = 'tester_db'

// tryMongo()
helloMongo()

async function tryMongo() {

    console.log('Connecting')
    const connection = await MongoClient.connect(url)
    
    console.log('Connected. Getting DB')
    const db = connection.db(dbName)

    console.log('Getting Collection')
    const collection = db.collection('customer')

    console.log('Fetching Docs.')
    const docs = await collection.find({ balance: { $gte: 10 } }).limit(3).toArray()    

    console.log(`Docs:\n`, docs)
    connection.close()
}

async function helloMongo() {

    var customers = await customerService.query()
    console.log('Got Customers: ', customers)

    // var customer = await customerService.getById('6818a4f68fc2115229f04439')
    // console.log('Got Customer: ', customer)

    // customer.balance = 100
    // var updatedCustomer = await customerService.update(customer)
    // console.log('Updated Customer: ', updatedCustomer)

    // const newCustomer = { fullName: 'Shumuts', balance: 220 }

    // var addedCustomer = await customerService.add(newCustomer)
    // console.log('Added Customer: ', addedCustomer)

    // const { deletedCount } = await customerService.remove('6818fbfa660384062b057bb1')
    // console.log('Customer Removed?', deletedCount)
}