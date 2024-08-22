import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* here store is the name of store we created inside store.jsh */}
    <Provider store={store}>
    <App />
      {/* to make store globally accessible by all componenets */}
    </Provider>
 
  </StrictMode>,
)
