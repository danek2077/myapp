import { Link } from 'react-router'
import { Player } from '../../model/types'

export const TableLink = ({ row }: { row: Player }) => {
  return (
    <Link to={`/player/${row.slug}`} className="text-link-gradient">
      {row.name}
    </Link>
  )
}
