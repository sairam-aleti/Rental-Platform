const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing =  require( "../models/Listing") ;

const MONGO_URL ="mongodb://127.0.0.1:27017/wanderlust";

main().then(()=> {
    console.log("connected to DB");
}).catch(err => {
    console.log(err);
}); 

async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async() => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "65edc52e11b31a685b6c8cb1"}));
    await Listing.insertMany(initData.data);
    console.log("data was intialized");
}

initDB();