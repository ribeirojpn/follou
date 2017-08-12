import redis from 'redis'
import dotenv from 'dotenv'
dotenv.config()

const client = redis.createClient(process.env.REDIS_URL)

client.on('error', (err) => {
  console.log('Error ', err)
})

export default client
