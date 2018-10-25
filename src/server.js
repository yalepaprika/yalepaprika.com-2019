import express from 'express';
import serve from 'serve-static';
import compression from 'compression';
import gr8 from './gr8'
import partialResponse from './lib/partial-response.js'
import * as sapper from '../__sapper__/server.js'

var app = express()

app.use(compression({ threshold: 0 }))
app.use(partialResponse())

app.get('/gr8.css', function (req, res) {
  res.setHeader("Content-Type", 'text/css; charset=UTF-8');
  res.send(gr8())
})

app.use(serve('static'))

app.use(sapper.middleware())


app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})


app.listen(process.env.PORT)
