import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../App'

const app = express()
app.use(express.static('public'))

app.get('/', (req, res) => {
  const content = renderToString(<App />)
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
  			<script src="./client.js"></script>
  		</body>
  	</html>
  `)
})

app.listen(9000, () => {
  console.log('启动成功！')
})
