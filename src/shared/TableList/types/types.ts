import { IndividualStats, Player } from "../../../services/types"

export interface ColumnConfig<T> {
  header: string
  key: keyof T
  hint?: string
  align?: 'center' | 'left' | 'right'
  render?: (item: T) => React.ReactNode
}
export interface GenericTableProps<T> {
  columns: ColumnConfig<T>[]
  data: T[]
}
export interface TablePaginationActionsProps {
  count: number
  page: number
  rowsPerPage: number
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void
}


export interface PlayerTableRow extends Omit<Player, 'history'> {
  elo: number;
  rank: string;
  stats: IndividualStats; 
}