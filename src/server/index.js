import express from 'express'
import favicon from 'serve-favicon'
import path from 'path'
import proxy from 'http-proxy-middleware'

import config from '../config'
import reactApp from './app'

// import routes from './routes'

const app = express()

app.use('/public', express.static('public'))
app.use(favicon(path.join(__dirname, '../../public', 'favicon.ico')))

if (process.env.NODE_ENV === 'production') {
  // In production we want to serve our JavaScripts from a file on the file
  // system.
  app.use('/static', express.static(path.join(process.cwd(), 'build/client/static')));
} else {
  // Otherwise we want to proxy the webpack development server.
  app.use('/static', proxy({
    target: 'http://localhost:3020',
    ws: true,
    logLevel: 'warn'
  }));
}

app.use(reactApp)

app.listen(config.port)
console.log(`Listening at http://${config.host}:${config.port}`)
