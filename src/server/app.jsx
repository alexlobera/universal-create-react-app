import React from 'react'
import { StaticRouter as Router, matchPath } from 'react-router'
// import { Provider } from 'react-redux'
// import routes from '../shared/config/Routes'
// import configureStore from '../shared/store/configureStore'

import render from './render'
import App from '../shared/App'
const NotFound = () => (<h1>Page not found</h1>)
const ErrorPage = () => (<h1>Sorry, there was an error on this page</h1>)

const routes = [
    '/',
    '/test/:id'
];

const reactApp = (req, res) => {
  const context = {}
  const storeInitiaState = undefined

  const match = routes.reduce((acc, route) => matchPath(req.url, route, { exact: true }) || acc, null);
  if (!match) {
    res.status(404).send(render(<NotFound />))
    return
  }

  let HTML
  let status = 200
  try {
    HTML = render(
      <Router context={{}} location={req.url}>
        <App />
      </Router>,
      storeInitiaState
    )
  } catch (error) {
    HTML = render(ErrorPage)
    status = 500
  }

  if (context.url) {
    res.redirect(301, context.url)
  } else {
    res.status(status).send(HTML)
  }
}

export default reactApp
