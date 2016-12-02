const Express = require('express')
const Morgan = require('morgan')
const Session = require('express-session')

const RedisStore = require('connect-redis')(Session)

const conf = require('./config')

const app = Express()

app.use(Session({
  secret: 'secret!',
  store: new RedisStore({
    host: conf.get('session.redis.host'),
    port: conf.get('session.redis.port'),
    pass: conf.get('session.redis.password')
  }),
  resave: false,
  saveUninitialized: false
}))
app.use(Morgan(conf.get('logging.format')))

app.listen(conf.get('server.port'), () => {
  console.log(`Server listening on port ${conf.get('server.port')}`)
})
