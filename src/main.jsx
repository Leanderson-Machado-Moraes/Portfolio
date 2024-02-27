import React from 'react'
import ReactDOM from 'react-dom/client'
import Portfolio from '../src/pages/portfolio'
import "./styles/global.css"
import "../src/output.css"

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
   <Portfolio></Portfolio>
    </React.StrictMode>,
  )