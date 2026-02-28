import Container from '../../../shared/ui/Container/Container'
import EloLeaderboard from '../../../widgets/Table/EloLeaderboard/ui/EloLeaderboard'
import ScoreLeaderboard from '../../../widgets/Table/ScoreLeaderboard/ui/ScoreLeaderboard'

const SEASON: number = 5

export const MainPage: React.FC = () => {
  return (
    <div className="mt-5">
      <Container>
        <div className="flex justify-center">
          <div className="group relative w-80 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">
            {/* Декоративный эффект свечения на фоне */}
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full  bg-red-600/45 blur-3xl"></div>

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
            <EloLeaderboard SEASON={SEASON} />
          </div>
          <div>
            <ScoreLeaderboard SEASON={SEASON} />
          </div>
        </div>
      </Container>
    </div>
  )
}
