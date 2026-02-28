import type { IndividualStats, Players, PlayerTableRow } from '../model/types'

const defaultStats: IndividualStats = {
  goals: 0,
  assists: 0,
  saves: 0,
  ownGoals: 0,
  shotsTarget: 0,
  passes: 0,
  passesCompletion: '0%',
  rebounds: 0,
  duels: 0,
  interceptions: 0,
  clearances: 0,
  bpRatio: '0 / 0',
  overallScore: 0,
  cs: 0,
}

export const mapPlayerStats = (
  response: Players,
  season: number,
): PlayerTableRow[] => {
  return response
    .map((player) => {
      const ssn = player.history.find((h) => h.season === season)
      if (!ssn) return null
      return {
        ...player,
        elo: ssn.elo,
        rank: ssn.rank,
        stats: { ...defaultStats, ...ssn.stats },
      } as PlayerTableRow
    })
    .filter((p): p is PlayerTableRow => p !== null)
}
