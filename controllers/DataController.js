
const MongoClient = require('../database/connection')

const InsertController = async(req,res)=>{
    const result  = await MongoClient.insertData()
    try{
        res.send(result)
        // console.log(result);
    }
    catch(err){
        res.send(err)
    }
}
const HomeController = async(req,res)=>{
    const result  = await MongoClient.getData()
    try{
        res.send(result)
        // console.log(result);
    }
    catch(err){
        res.send(err)
    }
}
const BollywoodController = async(req,res)=>{
    const result  = await MongoClient.getBollywoodData()
    try{
        res.send(result)
        console.log('Data fetched Sucessfully');
    }
    catch(err){
        res.send(err)
    }
}

const HollywoodController = async(req,res)=>{
    const result  = await MongoClient.getHollywoodData()
    try{
        res.send(result)
        console.log('Data fetched Sucessfully');
    }
    catch(err){
        res.send(err)
    }
}

const TravelController = async(req,res)=>{
    const result  = await MongoClient.getTravelData()
    try{
        res.send(result)
        console.log('Data fetched Sucessfully');
    }
    catch(err){
        res.send(err)
    }
}

const AnimeController = async(req,res)=>{
    const result  = await MongoClient.getAnimeData()
    try{
        res.send(result)
        console.log('Data fetched Sucessfully');
    }
    catch(err){
        res.send(err)
    }
}

const FoodController = async(req,res)=>{
    const result  = await MongoClient.getFoodData()
    try{
        res.send(result)
        console.log('Data fetched Sucessfully');
    }
    catch(err){
        res.send(err)
    }
}

const TechnologyController = async(req,res)=>{
    const result  = await MongoClient.getTechnologyData()
    try{
        res.send(result)
        console.log('Data fetched Sucessfully');
    }
    catch(err){
        res.send(err)
    }
}

module.exports = {
    InsertController,
    HomeController,
    BollywoodController,
    HollywoodController,
    TechnologyController,
    AnimeController,
    TravelController,
    FoodController
}