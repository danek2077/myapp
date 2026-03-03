import { CURRENT_SEASON } from '@shared/config/constants'
import { PlayerDto, Player } from '../model/types'

export const mapPlayer = (dto: PlayerDto): Player => {
  const currentSeasonEntry = dto.history.find(
    (h) => h.season === CURRENT_SEASON,
  )

  return {
    ...dto,
    latestStats: currentSeasonEntry,
    allTime: {
      elo: dto.history.reduce((acc, cur) => acc + cur.elo, 0),
      score: dto.history.reduce((acc, cur) => acc + cur.stats.overallScore, 0),
    },
  }
}
