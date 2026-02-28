import { Link } from 'react-router'

import type { PlayerTableRow } from '@src/entities/player/model/types'



export const TableLink = ({ row }: { row: PlayerTableRow }) => {
  return (
    <Link to={`/user/${row.slug}`} className="text-link-gradient">
      {row.name}
    </Link>
  )
}
