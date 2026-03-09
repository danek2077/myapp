import {
  SportsSoccer,
  Assistant,
  Shield,
  PrecisionManufacturing,
  CompareArrows,
} from '@mui/icons-material'
import {
  Card,
  Box,
  Stack,
  Typography,
  Chip,
  CardContent,
  Divider,
  Grid,
} from '@mui/material'
import { SeasonHistory } from '../../model/types'
import { StatItem } from './StatItem'
import { WINNER_BLOCK_STYLE } from '@src/shared/lib/theme/typography'

export const SeasonStatsCard = ({ ssn }: { ssn: SeasonHistory }) => {
  const { season, elo, rank, stats } = ssn

  return (
    <Card variant="outlined" sx={{ borderRadius: 2, overflow: 'hidden' }}>
      {/* Шапка карточки */}
      <Box
        sx={{
          p: 1.5,
          bgcolor: 'action.hover',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="subtitle1" fontWeight="800">
            SEASON {season}
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Chip
              label={rank}
              size="small"
              color="secondary"
              sx={{ fontWeight: 'bold', height: 20, fontSize: '0.7rem' }}
            />
            <Typography
              variant="caption"
              fontWeight="bold"
              color="text.secondary"
            >
              ELO: {elo}
            </Typography>
          </Stack>
        </Stack>
      </Box>

      <CardContent sx={{ p: '12px !important' }}>
        <Grid container spacing={2}>
          {/* Левая колонка: Overall Score */}
          <Grid size={{ xs: 12, sm: 3 }}>
            <Box sx={WINNER_BLOCK_STYLE}>
              {/* Все тексты оборачиваем в Box с zIndex, чтобы они были выше блика */}
              <Box sx={{ zIndex: 1, position: 'relative' }}>
                <Typography
                  variant="caption"
                  sx={{
                    opacity: 0.6,
                    textTransform: 'uppercase',
                    fontWeight: 900,
                    letterSpacing: 1.2,
                    display: 'block',
                    mb: -0.5, // Прижимаем заголовок к числу
                  }}
                >
                  Score
                </Typography>

                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 900,
                    fontStyle: 'italic',
                    // Текст будет слегка светиться белым
                    textShadow: '0 0 20px rgba(255,255,255,0.3)',
                    letterSpacing: -1,
                  }}
                >
                  {stats.overallScore}
                </Typography>

                {/* Маленький индикатор снизу для солидности */}
                
              </Box>
            </Box>
          </Grid>

          {/* Правая колонка: Сетка статов */}
          <Grid size={{ xs: 12, sm: 9 }}>
            <Grid container spacing={1}>
              <Grid size={{ xs: 3 }}>
                <StatItem
                  label="Goals"
                  value={stats.goals}
                  icon={<SportsSoccer />}
                />
              </Grid>
              <Grid size={{ xs: 3 }}>
                <StatItem
                  label="Assists"
                  value={stats.assists}
                  icon={<Assistant />}
                />
              </Grid>
              <Grid size={{ xs: 3 }}>
                <StatItem label="Saves" value={stats.saves} icon={<Shield />} />
              </Grid>
              <Grid size={{ xs: 3 }}>
                <StatItem label="CS" value={stats.cs} icon={<Shield />} />
              </Grid>

              <Grid size={{ xs: 3 }}>
                <StatItem
                  label="Pass %"
                  value={stats.passesCompletion}
                  icon={<PrecisionManufacturing />}
                />
              </Grid>
              <Grid size={{ xs: 3 }}>
                <StatItem
                  label="Shots"
                  value={stats.shotsTarget}
                  icon={<SportsSoccer />}
                />
              </Grid>
              <Grid size={{ xs: 3 }}>
                <StatItem
                  label="Duels"
                  value={stats.duels}
                  icon={<CompareArrows />}
                />
              </Grid>
              <Grid size={{ xs: 3 }}>
                <StatItem
                  label="BPR"
                  value={stats.bpRatio}
                  icon={<CompareArrows />}
                  hint="Bonus to Penalty Ratio"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{ my: 1.5 }} />

        {/* Нижний ряд: Advanced (очень мелко) */}
        <Stack
          direction="row"
          justifyContent="space-around"
          sx={{ textAlign: 'center' }}
        >
          {[
            { label: 'Int', val: stats.interceptions },
            { label: 'Clr', val: stats.clearances },
            { label: 'Reb', val: stats.rebounds },
            { label: 'OG', val: stats.ownGoals },
          ].map((item) => (
            <Box key={item.label}>
              <Typography
                variant="body2"
                fontWeight="bold"
                sx={{ lineHeight: 1 }}
              >
                {item.val}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ fontSize: '0.6rem' }}
              >
                {item.label}
              </Typography>
            </Box>
          ))}
        </Stack>
      </CardContent>
    </Card>
  )
}
