import { useGetPlayersQuery } from '@src/entities/player'
import { LeaderboardTable } from './Leaderboard'
import {
  allTimeEloColumns,
  allTimeScoreColumns,
  latestEloColumns,
  latestScoreColumns,
} from '../model/config'

export const LeaderboardList = () => {
  const { data, isError, isLoading } = useGetPlayersQuery()

  if (isError) {
    console.log('error in leaderboard')
    return <div>error</div>
  }
  if (isLoading) {
    return <div>Loading...</div>
  }

  const playersByallTimeStats = !data
    ? []
    : data.map((p) => p).sort((a, b) => b.allTime.elo - a.allTime.elo)

  const playersByScore = !data
    ? []
    : data.map((p) => p).sort((a, b) => b.allTime.score - a.allTime.score)

  const playersByLatestElo = !data
    ? []
    : data
        .filter((p) => p.latestStats !== undefined)
        .sort((a, b) => b.latestStats!.elo - a.latestStats!.elo)

  return (
    <div>
      <div className="mt-5 flex justify-evenly">
        <LeaderboardTable
          columns={latestEloColumns}
          data={playersByLatestElo}
          hasError={false}
          isLoading={false}
        />
        <LeaderboardTable
          columns={latestScoreColumns}
          data={playersByScore}
          hasError={false}
          isLoading={false}
        />
      </div>
      <div className="mt-5 flex justify-evenly">
        <LeaderboardTable
          columns={allTimeEloColumns}
          data={playersByallTimeStats}
          hasError={false}
          isLoading={false}
        />
        <LeaderboardTable
          columns={allTimeScoreColumns}
          data={playersByallTimeStats}
          hasError={false}
          isLoading={false}
        />
      </div>
    </div>
  )
}
