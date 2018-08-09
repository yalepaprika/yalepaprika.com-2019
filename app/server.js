import express from 'express';
import serve from 'serve-static';
import sapper from 'sapper';
import compression from 'compression';
import gr8 from './gr8'
import partialResponse from './lib/partial-response.js'
import { manifest } from './manifest/server.js';

var app = express()

app.use(compression({ threshold: 0 }))
app.use(partialResponse())

app.get('/gr8.css', function (req, res) {
  res.setHeader("Content-Type", 'text/css; charset=UTF-8');
  res.send(gr8())
})

app.use(serve('assets'))

app.use(sapper({ manifest }))

app.listen(process.env.PORT)
