import { MongoClient } from 'mongodb'

export const dbService = {
    getCollection
}

// Connection URL
const url = 'mongodb://localhost:27017'

// Database Name
const dbName = 'tester_db'

var dbConn = null

async function getCollection(collectionName) {
    const db = await _connect()
    return db.collection(collectionName)
}

async function _connect() {
    if (dbConn) return dbConn
    try {
        const client = await MongoClient.connect(url)
        const db = client.db(dbName)
        dbConn = db
        return db
    } catch (err) {
        console.log('Cannot Connect to DB', err)
        throw err
    }
}