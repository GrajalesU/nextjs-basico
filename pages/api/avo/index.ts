import DB from '@database';
import { IncomingMessage, ServerResponse } from "http";

const allAvos = async (request:IncomingMessage, response: ServerResponse) => { 
    const db = new DB()
    const allEntries = await db.getAll()
    const entriesLength = allEntries.length

    response.statusCode = 200 //ok
    response.setHeader('Content-type',"application/json")
    response.end(JSON.stringify({ data: allEntries, length: entriesLength }))
 }

 export default allAvos