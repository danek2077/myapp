import React from 'react';
import { ColumnConfig, PlayerTableRow } from '../../../shared/TableList/types/types';
import Table from '../../../shared/TableList/TableList'
import { TableLink } from '../../../shared/TableLink/TableLink';
import { useGetPlayersByScoreQuery } from '../../../services/docs';

const columns: ColumnConfig<PlayerTableRow>[] = [
    { key: 'name', header: 'NAME', render: (row) => <TableLink row={row} /> },
    {
      key: 'stats',
      header: 'INDIVIDUAL SCORE',
      hint: 'average overall score per game',
      render:(row)=><>{row.stats.overallScore}</>
    },
  ]
const ScoreLeaderboard = ({SEASON}:{SEASON:number}) => {
    const { data, isLoading, error } = useGetPlayersByScoreQuery(SEASON);
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

export default ScoreLeaderboard;