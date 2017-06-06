import { renderToString } from 'react-dom/server'

// TODO: move this to config
const bundleUrl = '/static/js/bundle.js'

export default (component, storeInitiaState = undefined) => `
  <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <link href="/public/app.css" integrity="" media="all" rel="stylesheet" />
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
