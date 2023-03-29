const {MongoClient} = require('mongodb')
const data = require('../ApiFile/Api')
const url = `mongodb+srv://kpranit0134:${process.env.PASSWORD}@cluster0.v0f64ar.mongodb.net/?retryWrites=true&w=majority`

const client = new MongoClient(url)

const insertData = async ()=>{
    try{
        await client.connect();
        const database = client.db("React-Blog");
        const collection = database.collection('Data');
        const dbResponce = await collection.insertMany(data)
        client.close();
        return dbResponce;
    }
    catch(err){
        return err.message
    }
}
const getData =  async ()=>{
    try{
        await client.connect();
        const database = client.db("React-Blog");
        const collection = database.collection('Data');
        const dbResponce = await collection.find().toArray()
        client.close();
        return dbResponce;
    }
    catch(err){
        return err.message
    }
}

const getBollywoodData =  async ()=>{
    try{
        await client.connect();
        const database = client.db("React-Blog");
        const collection = database.collection('Data');
        const dbResponce = await collection.find({'catagory':'bollywood'}).toArray()
        client.close();
        return dbResponce;
    }
    catch(err){
        return err.message
    }
}

const getAnimeData =  async ()=>{
    try{
        await client.connect();
        const database = client.db("React-Blog");
        const collection = database.collection('Data');
        const dbResponce = await collection.find({'catagory':'fitness'}).toArray()
        client.close();
        return dbResponce;
    }
    catch(err){
        return err.message
    }
}

const getFoodData =  async ()=>{
    try{
        await client.connect();
        const database = client.db("React-Blog");
        const collection = database.collection('Data');
        const dbResponce = await collection.find({'catagory':'food'}).toArray()
        client.close();
        return dbResponce;
    }
    catch(err){
        return err.message
    }
}

const getTechnologyData =  async ()=>{
    try{
        await client.connect();
        const database = client.db("React-Blog");
        const collection = database.collection('Data');
        const dbResponce = await collection.find({'catagory':'technology'}).toArray()
        client.close();
        return dbResponce;
    }
    catch(err){
        return err.message
    }
}

const getTravelData =  async ()=>{
    try{
        await client.connect();
        const database = client.db("React-Blog");
        const collection = database.collection('Data');
        const dbResponce = await collection.find({'catagory':'travel'}).toArray()
        client.close();
        return dbResponce;
    }
    catch(err){
        return err.message
    }
}

const getHollywoodData =  async ()=>{
    try{
        await client.connect();
        const database = client.db("React-Blog");
        const collection = database.collection('Data');
        const dbResponce = await collection.find({'catagory':'hollywood'}).toArray()
        client.close();
        return dbResponce;
    }
    catch(err){
        return err.message
    }
}

module.exports = {
    insertData,
    getData,
    getBollywoodData,
    getAnimeData,
    getHollywoodData,
    getFoodData,
    getTravelData,
    getTechnologyData
}