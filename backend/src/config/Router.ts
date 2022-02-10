import AclController     from '../controller/AclController'
import ConfigController  from '../controller/ConfigController'
import ServiceController from '../controller/ServiceController'

const restify = require( "restify" )
const server  = restify.createServer()

const corsMiddleware = require('restify-cors-middleware2')

const cors = corsMiddleware({
    preflightMaxAge : 5, //Optional
    origins         : ['*'],
    allowHeaders    : ['API-Token'],
    exposeHeaders   : ['API-Token-Expiry']
})

server.pre( cors.preflight )
server.use( cors.actual )

server.use( restify.plugins.bodyParser() )

server.get( '/', AclController.status )

server.get( '/config', ConfigController.index )
server.put( '/config', ConfigController.update )

server.get(   '/services/:id' , ServiceController.show )
server.put(   '/services/:id' , ServiceController.update )
server.patch( '/services/:id' , ServiceController.update )
server.del(   '/services/:id' , ServiceController.destroy )
server.get(   '/services'     , ServiceController.index )
server.post(  '/services'     , ServiceController.store )

server.listen( 3001, () => {
    console.log( '%s listening at %s', server.name, server.url )
})
