import React from 'react'

import { useGetPlayersByScoreQuery } from '../../../entities/player'
import type { PlayerTableRow } from '../../../entities/player/model/types'
import { TableLink } from '../../../entities/player/ui/TableLink'
import Table from '../../../shared/TableList/ui/TableList'
import type { ColumnConfig } from '../../../shared/TableList/model/types'

const columns: ColumnConfig<PlayerTableRow>[] = [
  { key: 'name', header: 'NAME', render: (row) => <TableLink row={row} /> },
  {
    key: 'stats',
    header: 'INDIVIDUAL SCORE',
    hint: 'average overall score per game',
    render: (row) => <>{row.stats.overallScore}</>,
  },
]
const TableXXX = ({ SEASON }: { SEASON: number }) => {
  const { data, isLoading, error } = useGetPlayersByScoreQuery(SEASON)
  if (isLoading) {
    return <div>loading...</div>
  }
  if (error) {
    console.log(error)
    return <div>error</div>
  }
  if (!data) return <div>Error data</div>
  return <Table columns={columns} data={data} />
}

export default TableXXX
