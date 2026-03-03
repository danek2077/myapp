import { Player } from '@src/entities/player/model/types'
import { TableList } from '@src/shared/TableList'
import { ColumnConfig } from '@src/shared/TableList/model/types'

type LeaderboardTableProps<T> = {
  columns: ColumnConfig<T>[] | any
  data: T[] | any
  isLoading: boolean
  hasError: boolean
}
export const LeaderboardTable = (props: LeaderboardTableProps<Player>) => {
  const { columns, data, hasError, isLoading } = props

  if (isLoading) {
    return <div>loading...</div>
  }
  if (hasError) {
    console.log('error in leaderboard')
    return <div>error</div>
  }
  if (!data) return <div>Error data</div>

  return (
    <div>
      <TableList columns={columns} data={data} />
    </div>
  )
}
