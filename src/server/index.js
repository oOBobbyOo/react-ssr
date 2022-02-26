import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import serialize from 'serialize-javascript'
import { getServerStore } from '../store'
import routes from '../routes'
import Header from '../components/Header'

const app = express()
app.use(express.static('public'))

app.get('*', (req, res) => {
  const content = renderToString(
    <Provider store={getServerStore()}>
      <StaticRouter location={req.path}>
        <Header />
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>
  )

  const initialState = JSON.stringify(
    JSON.parse(serialize(getServerStore().getState()))
  )

  res.send(`
  	<!DOCTYPE html>
  	<html lang="en">
  		<head>
  			<meta charset="UTF-8" />
  			<meta http-equiv="X-UA-Compatible" content="IE=edge" />
  			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
  			<title>React ssr</title>
  		</head>
  		<body>
  			<div id="root">${content}</div>
				<script>window.INITIAL_STATE = ${initialState} </script>
  			<script src="./client.js"></script>
  		</body>
  	</html>
  `)
})

app.listen(9000, () => {
  console.log('启动成功！')
})
