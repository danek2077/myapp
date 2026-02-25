import Container from '../../shared/Container/Container'
import Table from '../../shared/TableList/TableList'
import { ColumnConfig, PlayerTableRow } from '../../shared/TableList/types/types'
import { TableLink } from '../../shared/TableLink/TableLink'
import { useGetPlayersLatestStatsQuery } from '../../services/docs'
import EloLeaderboard from '../../widgets/Tables/EloLeaderboard/EloLeaderboard'
import ScoreLeaderboard from '../../widgets/Tables/ScoreLeaderboard/ScoreLeaderboard'

const columns1: ColumnConfig<PlayerTableRow>[] = [
  { key: 'name', header: 'NAME', render: (row) => <TableLink row={row} /> },
  { key: 'elo', header: 'ELO',render:(row) => <>{row.elo}</>},
]
const columns2: ColumnConfig<PlayerTableRow>[] = [
  { key: 'name', header: 'NAME', render: (row) => <TableLink row={row} /> },
  {
    key: 'stats',
    header: 'INDIVIDUAL SCORE',
    hint: 'average overall score per game',
    render:(row)=><>{row.stats.overallScore}</>
  },
]
const SEASON:number = 5

export const MainPage: React.FC = () => {
  const { data, isLoading, error } = useGetPlayersLatestStatsQuery(SEASON)

  if (isLoading) {
    return <div>loading...</div>
  }
  if (error) {
    console.log(error)
    return <div>error</div>
  }
  if (!data) return <div>Error data</div>

  return (
    <div className="mt-5">
      <Container>
        <div className="flex justify-center">
          <div className="group relative w-80 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">
            {/* Декоративный эффект свечения на фоне */}
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-red-600/20 bg-red-600/45 blur-3xl"></div>

            <div className="relative z-10">
              <div className="mb-1 text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
                18 SSN Winner
              </div>

              <h2 className="text-winner-gradient text-4xl">VIRTUAL</h2>

              <div className="mt-4 h-1 w-12 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]"></div>
            </div>
          </div>
        </div>
        <div className="mt-5 flex justify-evenly">
          <div>
            <EloLeaderboard SEASON={SEASON}/>
          </div>
          <div>
            <ScoreLeaderboard SEASON={SEASON}/>
          </div>
        </div>
      </Container>
    </div>
  )
}
