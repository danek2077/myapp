import { TableLink, useGetPlayersAllTimeStatsQuery } from '@src/entities/player'
import { PlayerWithAllTime } from '@src/entities/player/model/types'
import { TableList } from '@src/shared/TableList'
import { ColumnConfig } from '@src/shared/TableList/model/types'
import React from 'react'

const columns: ColumnConfig<PlayerWithAllTime>[] = [
  { key: 'name', header: 'NAME', render: (row) => <TableLink row={row} /> },
  {
    key: 'allTime',
    header: 'ALL-TIME ELO',
    render: (row) => <>{row.allTime.elo}</>,
  },
]

export const AllTimeElo = () => {
  const { data, isLoading, error } = useGetPlayersAllTimeStatsQuery()
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
