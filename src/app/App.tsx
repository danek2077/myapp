import React from 'react'
import { Provider as ReduxStoreProvider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router'
import { store } from './store'
import {
  PlayerProfilePage,
  TestPage,
  PlayerSeasonPage,
  MainPage,
} from '@src/pages'
import { Outlet } from 'react-router'

const App: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

export default App
