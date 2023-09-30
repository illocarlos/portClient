import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProviderWrapper } from './contexts/auth.context'
import { MessageProviderWrapper } from '../src/contexts/message.context'



ReactDOM.createRoot(document.getElementById('root')).render(

  <MessageProviderWrapper>
    <React.StrictMode>
      <AuthProviderWrapper>
        <Route>
          <App />
        </Route >
      </AuthProviderWrapper>
    </React.StrictMode>
  </MessageProviderWrapper>
)
