import React from 'react'

import { useGetPlayersLatestStatsQuery } from '@entities/player'
import type { PlayerTableRow } from '@entities/player/model/types'
import { TableLink } from '@src/entities/player/ui/TableLink'
import type { ColumnConfig } from '@src/shared/TableList/model/types'
import { TableList } from '@src/shared/TableList'

const columns: ColumnConfig<PlayerTableRow>[] = [
  { key: 'name', header: 'NAME', render: (row) => <TableLink row={row} /> },
  { key: 'elo', header: 'ELO', render: (row) => <>{row.elo}</> },
]

export const EloLeaderboard = ({ SEASON }: { SEASON: number }) => {
  const { data, isLoading, error } = useGetPlayersLatestStatsQuery(SEASON)
  if (isLoading) {
    return <div>loading...</div>
  }
  if (error) {
    console.log(error)
    return <div>error</div>
  }
  if (!data) return <div>Error data</div>
  return <TableList columns={columns} data={data} />
}
