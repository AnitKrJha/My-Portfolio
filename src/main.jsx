import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Loader from './components/loader.component'
import SidePanel from './components/side-panel.component'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Loader/>
    <App />
    <SidePanel/>
    
  </React.StrictMode>
)
