import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from '../../../shared/api/index'
import type { Player, PlayerDto } from '../model/types'
import { mapPlayer } from '../lib/mapPlayerStats'

export const playerApi = createApi({
  reducerPath: 'playerApi',
  baseQuery: axiosBaseQuery({ baseUrl: 'http://localhost:4000/api' }),
  endpoints: (builder) => ({
    getPlayerBySlug: builder.query<Player, string>({
      query: (slug) => ({ url: `/docs_list/${slug}` }),
      transformResponse: (dto: PlayerDto): Player => mapPlayer(dto),
    }),
    getPlayers: builder.query<Player[], void>({
      query: () => ({ url: '/docs_list' }),
      transformResponse: (response: PlayerDto[]): Player[] =>
        response.map((dto) => mapPlayer(dto)),
    }),
  }),
})
