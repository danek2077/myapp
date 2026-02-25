import type { BaseQueryFn } from '@reduxjs/toolkit/query'
import { createApi } from '@reduxjs/toolkit/query/react'
import axios from 'axios'
import type { AxiosRequestConfig, AxiosError } from 'axios'

import type { IndividualStats, Player, Players } from './types'
import { PlayerTableRow } from '../shared/TableList/types/types'

const defaultStats: IndividualStats = {
  goals: 0,
  assists: 0,
  saves: 0,
  ownGoals: 0,
  shotsTarget: 0,
  passes: 0,
  passesCompletion: "0%",
  rebounds: 0,
  duels: 0,
  interceptions: 0,
  clearances: 0,
  bpRatio: "0 / 0",
  overallScore: 0,
  cs: 0,
};

const transformedDataTable = (response: Players,season:number):PlayerTableRow[] => {
  return response.map(player => {

    const ssn = player.history.find(h => h.season === season);
    
    // 2. Если игрока не было в этом сезоне — выкидываем его (через null)
    if (!ssn) return null;

    return {
      // Копируем базовые поля (id, name, slug, position...)
      ...player, 
      // Добавляем поля из сезона
      elo: ssn.elo,
      rank: ssn.rank,
      // МАГИЯ: Сначала кладем все нули, а сверху "накрываем" реальными данными
      // Если в ssn.stats нет поля 'goals', оно останется 0 из defaultStats
      stats: { 
        ...defaultStats, 
        ...ssn.stats 
      }
    } as PlayerTableRow; // Принудительно говорим TS, что теперь всё заполнено
  }).filter((p): p is PlayerTableRow => p !== null);
}

/**
 * Custom axios-based baseQuery for RTK Query.
 * Provides proper error handling and response transformation.
 */
const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' },
  ): BaseQueryFn<
    {
      url: string
      method?: AxiosRequestConfig['method']
      data?: AxiosRequestConfig['data']
      params?: AxiosRequestConfig['params']
      headers?: AxiosRequestConfig['headers']
    },
    unknown,
    unknown
  > =>
  async ({ url, method = 'GET', data, params, headers }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      })
      return { data: result.data }
    } catch (axiosError) {
      const err = axiosError as AxiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  }

// Define a service using a base URL and expected endpoints
export const docsApi = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: 'http://localhost:4000/api',
  }),
  endpoints: (builder) => ({
    getPlayers: builder.query<Players, void>({
      query: () => ({ url: '/docs_list' }),
    }),
    getPlayer: builder.query<Player, string>({
      query: (slug) => ({ url: `/docs_list/${slug}` }),
    }),
    getPlayersLatestStats: builder.query<PlayerTableRow[], number>({
      query: () => ({ url: '/docs_list' }),
      transformResponse: (response: Players, _, season):PlayerTableRow[] => {
        return transformedDataTable(response,season)
      },
    }),
    getPlayersByScore: builder.query<PlayerTableRow[], number>({
      query: () => ({ url: '/docs_list' }),
      transformResponse: (response: Players, _, season):PlayerTableRow[] => {
        return transformedDataTable(response,season).sort((a,b) => b.stats.overallScore - a.stats.overallScore)
      },
    })
  }),
  reducerPath: 'docsApi',
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPlayersQuery,
  useGetPlayerQuery,
  useGetPlayersLatestStatsQuery,
  useGetPlayersByScoreQuery
} = docsApi
