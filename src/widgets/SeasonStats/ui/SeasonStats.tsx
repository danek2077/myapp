import {
  Star,
  SportsSoccer,
  Assistant,
  Shield,
  CompareArrows,
  PrecisionManufacturing,
} from '@mui/icons-material'
import {
  Box,
  Stack,
  Typography,
  Chip,
  Grid,
  Card,
  CardContent,
  Divider,
} from '@mui/material'
import { useGetPlayerBySlugQuery } from '@src/entities/player'
import { SeasonStatsCard } from '@src/entities/player/ui/SeasonStatsCard/SeasonStatsCard'
import { StatItem } from '@src/entities/player/ui/SeasonStatsCard/StatItem'
import React from 'react'

export const SeasonStats = ({
  slug,
  seasonId,
}: {
  slug: string
  seasonId: string
}) => {
  const { data, isLoading, error } = useGetPlayerBySlugQuery(slug)
  if (isLoading) {
    return <div>loading...</div>
  }
  if (error) {
    console.error(error)
    return <div>error</div>
  }
  if (!data) return <div>Error data</div>

  const ssn = data.history.find((h) => h.season === Number(seasonId))
  if (!ssn) {
    return <div>pizda</div>
  }

  return <SeasonStatsCard ssn={ssn} />
}
