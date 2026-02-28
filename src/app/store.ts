import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

// Импортируем API из слоя entities
import { playerApi } from '@src/entities/player'

export const store = configureStore({
  reducer: {
    [playerApi.reducerPath]: playerApi.reducer,
  },
  // Добавляем middleware для кэширования, инвалидации и других фишек RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(playerApi.middleware),
})

// Настройка слушателей для refetchOnFocus/refetchOnReconnect
setupListeners(store.dispatch)

// Типизация для использования в компонентах
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
