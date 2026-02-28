import React from 'react'
import { Provider as ReduxStoreProvider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router'

import { ProfilePage, TestPage } from '@src/pages'
import { MainPage } from '@src/pages/Main/ui/MainPage'
import { store } from './store'




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
