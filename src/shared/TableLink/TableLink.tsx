import { Link } from 'react-router'
import { Player } from '../../services/types'
import { PlayerTableRow } from '../TableList/types/types'

export const TableLink = ({ row }: { row: PlayerTableRow }) => {
  return (
    <Link to={`/user/${row.slug}`} className="text-link-gradient">
      {row.name}
    </Link>
  )
}
