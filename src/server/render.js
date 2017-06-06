import { renderToString } from 'react-dom/server'

const DEV = process.env.NODE_ENV === 'development'

const bundleUrl = DEV ?
  '/static/js/bundle.js' :
  '/static/js/main[hash].js'

const css = DEV ?
  '' :
  `<link href="/static/css/main[hash].css" media="all" rel="stylesheet" />`

export default (component, storeInitiaState = undefined) => `
  <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        ${css}
        <link rel="manifest" href="/public/manifest.json">
        <title>Masters Directory</title>
        <script>
          window.__store_initial_state__ = ${JSON.stringify(storeInitiaState)}
        </script>
      </head>
      <body>
        <div id="root">${renderToString(component)}</div>
        <script type="application/javascript" src="${bundleUrl}"></script>
      </body>
  </html>
`
