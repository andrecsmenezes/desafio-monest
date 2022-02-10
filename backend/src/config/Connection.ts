import "reflect-metadata"
import { createConnection } from "typeorm"

createConnection().then( () => {
    console.log( "Connection ok!" )
}).catch( error => console.log( error ) )
