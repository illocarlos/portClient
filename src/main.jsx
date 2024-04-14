import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import './App.css'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProviderWrapper } from './contexts/auth.context'
import { MessageProviderWrapper } from '../src/contexts/message.context'
import { TranslateContextWrapper } from './contexts/translate.context';
import Index from './pages/Index/Index';


ReactDOM.createRoot(document.getElementById('root')).render(

  <MessageProviderWrapper>
    <React.StrictMode>
      <Router>
        <AuthProviderWrapper>

          <TranslateContextWrapper>
            <Index />
            <App />
          </TranslateContextWrapper>

        </AuthProviderWrapper>
      </Router>
    </React.StrictMode>
  </MessageProviderWrapper>

);

