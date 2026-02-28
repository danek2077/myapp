import { createApi } from '@reduxjs/toolkit/query/react'

import { axiosBaseQuery } from '../../../shared/api/index' // Вынеси свой axiosBaseQuery в shared
import { mapPlayerStats } from '../lib/mapPlayerStats'
import type { Player, Players, PlayerTableRow } from '../model/types'

export const playerApi = createApi({
  reducerPath: 'playerApi',
  baseQuery: axiosBaseQuery({ baseUrl: 'http://localhost:4000/api' }),
  endpoints: (builder) => ({
    getPlayerBySlug: builder.query<Player, string>({
      query: (slug) => ({ url: `/docs_list/${slug}` }),
    }),
    getPlayersLatestStats: builder.query<PlayerTableRow[], number>({
      query: () => ({ url: '/docs_list' }),
      transformResponse: (response: Players, _, season) =>
        mapPlayerStats(response, season),
    }),
    getPlayersByScore: builder.query<PlayerTableRow[], number>({
      query: () => ({ url: '/docs_list' }),
      transformResponse: (response: Players, _, season) =>
        mapPlayerStats(response, season).sort(
          (a, b) => b.stats.overallScore - a.stats.overallScore,
        ),
    }),
  }),
})
