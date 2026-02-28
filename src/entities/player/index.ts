import { playerApi } from './api/PlayerApi'

export { playerApi }
export const {
  useGetPlayerBySlugQuery,
  useGetPlayersLatestStatsQuery,
  useGetPlayersByScoreQuery,
} = playerApi

export { TableLink } from './ui/TableLink';