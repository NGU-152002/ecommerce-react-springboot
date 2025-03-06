import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import PageNotFound from './pages/PageNotFound.jsx'
import Auth from './pages/Auth.jsx'
import SearchResults from './pages/SearchResults.jsx'
import Overview from './pages/Overview.jsx'
import { Provider } from "react-redux"
import store from '../redux/store.js'
import UserProfile from './components/UserProfile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
