export interface IndividualStats {
  goals: number
  assists: number
  saves: number
  ownGoals: number
  shotsTarget: number
  passes: number
  passesCompletion: string // "85.50%"
  rebounds: number
  duels: number
  interceptions: number
  clearances: number
  bpRatio: string // "10 / 2"
  overallScore: number
  cs: number // 0 или 1
}

export interface SeasonHistory {
  season: number
  elo: number
  rank: string // "Legend", "Master", "Gold" и т.д.
  stats: Partial<IndividualStats> // Статистика именно за этот сезон
}

export interface Player {
  id: string
  slug: string
  name: string
  position: 'GK' | 'DM' | 'AM' | 'ST'
  gamesPlayed?: number
  winnedGames?: number
  loosedGames?: number
  history: SeasonHistory[] // Массив сезонов
}

export type Players = Player[]
