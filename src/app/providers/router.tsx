import { ROUTES } from '@src/shared/config/routes'
import { MainPage, TestPage } from '@src/pages'
import { PlayerSeasonPage } from '@src/pages/PlayerSeason'
import { createBrowserRouter } from 'react-router'
import { PlayerProfilePage } from '@src/pages/PlayerProfile'

export const router = createBrowserRouter([
  { path: ROUTES.MAIN, element: <MainPage /> },
  { path: ROUTES.PLAYER_PROFILE, element: <PlayerProfilePage /> },
  { path: ROUTES.PLAYER_SEASON, element: <PlayerSeasonPage /> },
  { path: ROUTES.TEST, element: <TestPage /> },
])
