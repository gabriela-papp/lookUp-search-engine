import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes } from 'react-router-dom'

import App from './App'
import { ResultContextProvider } from './contexts/ResultContextProvider'

ReactDOM.render(
  <ResultContextProvider>
    <Router>
      <App />
    </Router>
  </ResultContextProvider>,
  document.getElementById('root'),
)
