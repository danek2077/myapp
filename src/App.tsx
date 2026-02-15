import React from 'react'
import { Provider as ReduxStoreProvider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router'

import { MainPage } from './pages/MainPage/MainPage'
import { store } from './store'
import ProfilePage from './pages/Profile/ProfilePage'

const App: React.FC = () => {
  return (
    <ReduxStoreProvider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/user/:id" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </ReduxStoreProvider>
  )
}

export default App
