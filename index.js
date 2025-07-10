const { MongoClient } = require("mongodb");

// Add connection string
const uri = "mongodb+srv://<username>:<password>@";

const client = new MongoClient(uri);

async function run() {

  try {
    const database = client.db(''); //Database
    const sample = database.collection(''); //Collection

    /*
    ############# CRUD Operations ##############

    Create
    Use insertOne() to create a new document. insertOne() has only one required parameter: the document to insert. If the document does not include a field named _id, the MongoDB Node.js driver will add one automatically.
    To create multiple documents, use insertMany(). The only argument you are required to pass to insertMany() is an array of documents to insert.
    Both insertOne() and insertMany() allow you to pass optional settings. One optional setting to note for insertMany() is the boolean ordered. If an insert fails when ordered is to true, the remaining inserts will not be executed. If an insert fails when ordered is to false, the remaining inserts will be executed. See the official documentation for more information.

    Read
    To retrieve a single document from your database, use findOne(). findOne() requires that you pass a query object. The query can contain zero to many properties.
    To retrieve multiple documents from your database, use find(). Like findOne(), find() requires you to pass a query object that contains zero to many properties. find() returns a cursor that you can use to iterate over the results.
    Both findOne() and find() allow you to pass optional settings when you call them. One handy option is projection, which allows you to explicitly exclude or include the fields that are returned in the query.

    Update
    Use updateOne() when you want to update a single document. updateOne() has two required parameters: a filter object that indicates which document should be updated and an update object that indicates the update operations that should be applied to the document.
    To update multiple documents, you can use updateMany(). updateMany() has the same required parameters as updateOne(): a filter object and an update object.
    Both updateOne() and updateMany() allow you to pass optional settings to them when you call them. upsert is one of the options you can pass. When upsert is set to true, a new document will be created if no document matches the query. upsert can be really helpful as it allows you to combine multiple operations into one: checking to see if a document exists and then updating the document if it exists or creating a new document if it does not.

    Delete
    To delete a single document, use deleteOne(). A filter object that indicates the document to be deleted is the only required parameter.
    Use deleteMany() when you want to delete multiple documents. Like deleteOne(), the only required parameter is the filter object.
    Both deleteOne() and deleteMany() allow you to pass optional settings as well. See the official documentation for more information.
    */
    
    const insertMany = [ { _id: 1, student: "Skye", points: 75, commentsSemester1: "great at math", commentsSemester2: "loses temper"}, { _id: 2, student: "Elizabeth", points: 60, commentsSemester1: "well behaved", commentsSemester2: "needs improvement" }];
    const findOne = { _id: 1 };
    const deleteOne = { _id: 1 };

    const query = await 
                   sample.insertMany(insertMany);
                   //sample.findOne(findOne);
                   //sample.updateOne({_id : 2 }, { $set:{ "points" : 85 } });
                   //sample.deleteOne(deleteOne);
  
    console.log(query);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);