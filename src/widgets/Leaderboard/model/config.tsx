import { TableLink } from '@src/entities/player'
import { Player } from '@src/entities/player/model/types'
import { ColumnConfig } from '@src/shared/TableList/model/types'

export const latestScoreColumns: ColumnConfig<Player>[] = [
  { key: 'name', header: 'NAME', render: (row) => <TableLink row={row} /> },
  {
    key: 'latestStats.stats.overallScore',
    header: 'IP SCORE',
    hint: 'average overall score per game or avg individual performance',
    render: (row) => <>{row.latestStats?.stats.overallScore}</>,
  },
]

export const latestEloColumns: ColumnConfig<Player>[] = [
  { key: 'name', header: 'NAME', render: (row) => <TableLink row={row} /> },
  {
    key: 'latestStats.elo',
    header: 'ELO',
    render: (row) => <>{row.latestStats?.elo}</>,
  },
]

export const allTimeEloColumns: ColumnConfig<Player>[] = [
  { key: 'name', header: 'NAME', render: (row) => <TableLink row={row} /> },
  {
    key: 'allTime',
    header: 'ALL-TIME ELO',
    render: (row) => <>{row.allTime?.elo}</>,
  },
]

export const allTimeScoreColumns: ColumnConfig<Player>[] = [
  { key: 'name', header: 'NAME', render: (row) => <TableLink row={row} /> },
  {
    key: 'allTime.score',
    header: 'ALL-TIME IP SCORE',
    render: (row) => <>{row.allTime?.score}</>,
    hint: 'ALL-TIME average overall score per game or avg individual performance',
  },
]
