import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import font directly
import AgrandirFont from './Fonts/Agrandir-Regular.otf'

// Create style element to inject font
const style = document.createElement('style')
style.textContent = `
  @font-face {
    font-family: 'Agrandir-Regular';
    src: url('${AgrandirFont}') format('opentype');
    font-weight: normal;
    font-style: normal;
  }
`
document.head.appendChild(style)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
