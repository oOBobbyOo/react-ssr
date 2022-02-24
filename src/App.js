import React, { useState } from 'react'

import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './routes'
import Header from './components/Header'

export default function App() {
  return (
    <>
      <Header />
      {renderRoutes(routes)}
    </>
  )
}
