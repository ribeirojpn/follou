require('dotenv').config()
import url from 'url'

let urlServer = url.format({
    protocol: process.env.PROTOCOL || 'http',
    hostname: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000
})
export default urlServer
