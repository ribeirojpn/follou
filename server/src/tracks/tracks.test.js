import request from 'supertest'
import app from './../../app'
import redisClient from './../config/redis'

let track = {
  id: '7uxva9lqtvQPwTjAyAtjS0',
  lyric_url: 'https://genius.com/Amine-redmercedes-lyrics'
}

beforeAll(() => {
  return redisClient.set(track.id, track.lyric_url)
})

describe('Tracks API Routes', () => {
  describe('GET /api/tracks/:id', () => {
    it('Respond with JSON', () => {
      return request(app).get('/api/tracks/7uxva9lqtvQPwTjAyAtjS0')
        .expect(200)
        .then(res => {
          expect(res.body).toEqual(track)
        })
    })

    it('Respond with 404', () => {
      return request(app).get('/api/tracks/404')
        .expect(404)
        .then(res => {
          expect(res.body).toEqual('Not found')
        })
    })
  }) 
})