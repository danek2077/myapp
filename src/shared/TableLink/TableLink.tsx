import { Link } from 'react-router'
import { Player } from '../../lib/data'

export const TableLink = ({ row }: { row: Partial<Player> }) => {
  return (
    <Link to={`/user/${row.id}`} className="text-link-gradient">
      {row.player}
    </Link>
  )
}
