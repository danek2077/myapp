import { Link } from 'react-router'

import type { PlayerWithAllTime } from '@src/entities/player/model/types'

export const TableLink = ({ row }: { row: Partial<PlayerWithAllTime> }) => {
  return (
    <Link to={`/user/${row.slug}`} className="text-link-gradient">
      {row.name}
    </Link>
  )
}
