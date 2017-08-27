import url from 'url'

let urlServer
if (process.env.HOST.startsWith('follou')) {
  urlServer = url.format({
    protocol: process.env.PROTOCOL,
    hostname: process.env.HOST})
} else {
  urlServer = url.format({
    protocol: process.env.PROTOCOL || 'http',
    hostname: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000
  })
}
export default urlServer
