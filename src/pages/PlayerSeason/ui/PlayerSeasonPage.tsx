import {
  Star,
  SportsSoccer,
  Assistant,
  Shield,
  CompareArrows,
  PrecisionManufacturing,
} from '@mui/icons-material'
import {
  Tooltip,
  Card,
  Box,
  Typography,
  Stack,
  Chip,
  CardContent,
  Divider,
} from '@mui/material'
import { useGetPlayerBySlugQuery } from '@src/entities/player'
import React from 'react'
import { useParams } from 'react-router'
import Grid from '@mui/material/Grid'
import Container from '@src/shared/ui/Container/Container'
import { StatItem } from '../../../entities/player/ui/SeasonStatsCard/StatItem'
import { SeasonStats } from '@src/widgets/SeasonStats'

export const PlayerSeasonPage = () => {
  const { slug, seasonId } = useParams<{ slug: string; seasonId: string }>()
  if (!slug || !seasonId) {
    return <div>пизда</div>
  }

  return (
    <Container>
      <SeasonStats seasonId={seasonId} slug={slug} />
    </Container>
  )
}
