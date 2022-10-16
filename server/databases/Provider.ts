// VIL FLYTTE ALT AV DATABASE CONNECTION HIT I FREMTIDEN


/* 
 import { Request, Response, Application } from 'express';
 
import * as mongoose from 'mongoose';

import { responsePathAsArray } from "graphql";
import { log } from 'console';

 const uri: string = process.env.MONGO_DB_PATH as string;
 


const uri: string = "mongodb+srv://sips:sips123@sips.zjjstwz.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, (err: any) => {
if (err)
{
  console.log(err.message)
}else{
  console.log("successsss");
}
}) */


// mongoose connection
/* let conn: mongoose.Connection | null = null;
 */




/* async function main(){

  const uri: string = "mongodb+srv://sips:sips123@sips.zjjstwz.mongodb.net/?retryWrites=true&w=majority";


  const client = new MongoClient(uri);

  try {
      // Connect to the MongoDB cluster
      await client.connect();

      // Make the appropriate DB calls
      await  listDatabases(client);

  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}

main().catch(console.error);



  async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
 */
/* const client = new MongoClient(uri);
 */




/**
 * creates database connection
 * @returns mongodb connection
 */

/* 
export const getConnection = async (): Promise<mongoose.Connection> => {
  if (conn == null) {
    conn = await mongoose.createConnection(uri, {
      bufferCommands: false,
      bufferMaxEntries: 0,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
  }
  return conn;
}; 

*/