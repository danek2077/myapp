import React from 'react';
import { useGetPlayersLatestStatsQuery } from '../../../services/docs';
import { ColumnConfig, PlayerTableRow } from '../../../shared/TableList/types/types';
import { TableLink } from '../../../shared/TableLink/TableLink';
import Table from '../../../shared/TableList/TableList'

const columns: ColumnConfig<PlayerTableRow>[] = [
    { key: 'name', header: 'NAME', render: (row) => <TableLink row={row} /> },
    { key: 'elo', header: 'ELO',render:(row) => <>{row.elo}</>},
  ]

const EloLeaderboard = ({SEASON}:{SEASON:number}) => {
    const { data, isLoading, error } = useGetPlayersLatestStatsQuery(SEASON)
    if (isLoading) {
        return <div>loading...</div>
      }
      if (error) {
        console.log(error)
        return <div>error</div>
      }
      if (!data) return <div>Error data</div>
    return (
        <Table columns={columns} data={data}/>
    );
};

export default EloLeaderboard;