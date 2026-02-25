import React from 'react'
import { Provider as ReduxStoreProvider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router'

import { MainPage } from './pages/MainPage/MainPage'
import { store } from './store'
import ProfilePage from './pages/Profile/ProfilePage'
import TestPage from './pages/TestPage/TestPage'

const App: React.FC = () => {
  return (
    <ReduxStoreProvider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/user/:slug" element={<ProfilePage />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </BrowserRouter>
    </ReduxStoreProvider>
  )
}

export default App
