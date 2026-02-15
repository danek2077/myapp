import { Player, data } from '../../lib/data'
import Container from '../../shared/Container/Container'
import Table from '../../shared/TableList/TableList'
import { ColumnConfig } from '../../shared/TableList/types/types'
import { TableLink } from '../../shared/TableLink/TableLink'

export const MainPage: React.FC = () => {
  const columns1: ColumnConfig<Partial<Player>>[] = [
    { key: 'player', header: 'NAME', render: (row) => <TableLink row={row} /> },
    { key: 'elo', header: 'ELO' },
  ]
  const columns2: ColumnConfig<Partial<Player>>[] = [
    { key: 'player', header: 'NAME', render: (row) => <TableLink row={row} /> },
    {
      key: 'overallScore',
      header: 'INDIVIDUAL SCORE',
      hint: 'average overall score per game',
    },
  ]

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
            <Table columns={columns1} data={data} />
          </div>
          <div>
            <Table columns={columns2} data={data} />
          </div>
        </div>
      </Container>
    </div>
  )
}
