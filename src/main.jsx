import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Loader from './components/loader.component'
import SidePanel from './components/side-panel.component'
import Navigation from './components/navigation.component'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Loader/>
    <Navigation/>
    <App />
    <SidePanel/>
    
  </React.StrictMode>
)
