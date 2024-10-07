// const URI ="mongodb+srv://BackendLearning:4XTKei1s2BW9nMEb@learningbackend.je8ms.mongodb.net/?retryWrites=true&w=majority&appName=LearningBackend"

// const URI = "mongodb+srv://BackendLearning:4XTKei1s2BW9nMEb@learningbackend.je8ms.mongodb.net/"

// const URI = "mongodb+srv://LearningBackend:4XTKei1s2BW9nMEb@learningbackend.je8ms.mongodb.net/?retryWrites=true&w=majority&appName=LearningBackend"

//  ankitpawar

//const URL ="mongodb+srv://Backend:pWN4kAQ6e5bXegbe@backend.20hhu.mongodb.net/"

// const URI = mongodb+srv://<db_username>:<db_password>@backend.20hhu.mongodb.net/?retryWrites=true&w=majority&appName=Backend

const {MongoClient } =require ("mongodb")

const url = "mongodb+srv://Backend:pWN4kAQ6e5bXegbe@backend.20hhu.mongodb.net/"

const client =new MongoClient (url)
const dbName ="Users"

async function main(){
    await client.connect()
    console.log("connected successfully")
    const db = client.db (dbName)
    const collection = db.collection ("user")

//  Insert a Data 

const data = {
    firstName:"ank",
    lastName: "bua",
address : "marima"

}
const insertResult = await collection.insertMany([data]);
console.log('Inserted documents =>', insertResult);

// update

const updateResult = await collection.updateOne({  firstName :"ank"}, { $set: { firstName: "deepika" } });
console.log('Updated documents =>', updateResult);


//  how to read Data
 const findResult = await collection.find({}).toArray();
 console.log('Found documents =>', findResult);



return "done"
}

main ()
    .then (console.log)
    .catch( console.error)
    .finally(()=> client.close())

 