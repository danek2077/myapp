import React from 'react'
import { useParams } from 'react-router'
import { Box, Paper, Typography, Stack, Chip } from '@mui/material'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import Container from '../../shared/Container/Container'

import { useGetPlayerQuery } from '../../services/docs'

const ProfilePage = () => {
  const { slug } = useParams<{ slug: string }>()
  if (!slug) {
    return undefined
  }
  const { data, error, isLoading } = useGetPlayerQuery(slug)
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    console.log(error)
    return <div>Error</div>
  }
  if (data) {
    const player = data
    return (
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: '#ffffff',
          p: 4,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ width: '100%', maxWidth: '850px' }}>
          {/* ШАПКА: Глубокий темный стиль без лишних линий */}
          <Paper
            elevation={0}
            sx={{
              background: 'linear-gradient(180deg, #0f172a 0%, #020617 100%)',
              borderRadius: '24px',
              p: 5,
              mb: 6,
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
            }}
          >
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              justifyContent="space-between"
              alignItems="center"
              spacing={3}
            >
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography
                  variant="h2"
                  sx={{
                    color: 'white',
                    fontWeight: 900,
                    fontStyle: 'italic',
                    textTransform: 'uppercase',
                    lineHeight: 0.9,
                    fontSize: { xs: '3rem', md: '4rem' },
                  }}
                >
                  {player.name}
                </Typography>
                <Stack
                  direction="row"
                  spacing={1.5}
                  sx={{
                    mt: 3,
                    justifyContent: { xs: 'center', md: 'flex-start' },
                  }}
                >
                  <Chip
                    label={player.position}
                    sx={{
                      bgcolor: 'white',
                      color: '#0f172a',
                      fontWeight: 800,
                      borderRadius: '8px',
                      fontSize: '0.75rem',
                    }}
                  />
                  <Typography
                    sx={{
                      color: '#475569',
                      alignSelf: 'center',
                      fontWeight: 600,
                      fontSize: '0.8rem',
                      ml: 1,
                    }}
                  >
                    name: {player.name}
                  </Typography>
                </Stack>
              </Box>

              <Box
                sx={{
                  textAlign: 'center',
                  px: 4,
                  py: 2,
                  borderLeft: { md: '1px solid rgba(255,255,255,0.1)' },
                }}
              >
                <Typography
                  sx={{
                    color: '#94a3b8',
                    fontSize: '0.65rem',
                    fontWeight: 800,
                    letterSpacing: '2px',
                    mb: 1,
                  }}
                >
                  CURRENT RATING
                </Typography>
                <Typography
                  sx={{
                    color: 'white',
                    fontSize: '3.5rem',
                    fontWeight: 900,
                    fontFamily: 'monospace',
                    lineHeight: 1,
                  }}
                >
                  1221
                </Typography>
              </Box>
            </Stack>
          </Paper>

          {/* СЕТКА СТАТИСТИКИ */}
          {/* <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
              gap: 2,
              mb: 6,
            }}
          >
            {[
              {
                label: 'Pass Completion',
                value: `${player.stats.passesCompletion}%`,
                color: '#3b82f6',
              },
              {
                label: 'AVG GOALS',
                value: player.stats.goals,
                color: '#ef4444',
              },
              {
                label: 'AVG ASSISTS',
                value: player.stats.assists,
                color: '#22c55e',
              },
              {
                label: 'AVG OVERALL SCORE',
                value: player.stats.overallScore,
                color: '#f59e0b',
                highlight: true,
              },
            ].map((stat, idx) => (
              <Paper
                key={idx}
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: '20px',
                  border: '1px solid #e2e8f0',
                  bgcolor: stat.highlight ? '#f8fafc' : 'white',
                  textAlign: 'center',
                }}
              >
                <Typography
                  sx={{
                    color: '#64748b',
                    fontSize: '0.65rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    mb: 1,
                  }}
                >
                  {stat.label}
                </Typography>
                <Typography
                  sx={{
                    color: stat.color,
                    fontSize: '1.8rem',
                    fontWeight: 900,
                    fontFamily: 'monospace',
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </Typography>
              </Paper>
            ))}
          </Box> */}

          {/* ИСТОРИЯ: Карточная система с границами */}
          <Typography
            sx={{
              color: '#0f172a',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontSize: '0.85rem',
              mb: 3,
              ml: 1,
            }}
          >
            Seasonal History
          </Typography>

          <Stack spacing={2}>
            {player.history.map((s, idx) => (
              <Paper
                key={idx}
                elevation={0}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  p: 3,
                  bgcolor: '#f8fafc', // Светлый фон карточки
                  border: '1px solid #e2e8f0', // Видимая граница
                  borderRadius: '16px',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    borderColor: '#cbd5e1',
                    bgcolor: '#ffffff',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                    transform: 'translateX(4px)',
                  },
                }}
              >
                <Stack direction="row" spacing={3} alignItems="center">
                  <Box>
                    <Typography
                      sx={{
                        color: '#1e293b',
                        fontWeight: 800,
                        fontSize: '1rem',
                      }}
                    >
                      {s.season}
                    </Typography>
                    <Typography
                      sx={{
                        color: '#64748b',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                      }}
                    >
                      Ranked {s.rank}
                    </Typography>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center">
                  <TrendingUpIcon
                    sx={{ color: '#22c55e', fontSize: '1.2rem' }}
                  />
                  <Typography
                    sx={{
                      color: '#0f172a',
                      fontWeight: 900,
                      fontSize: '1.2rem',
                      fontFamily: 'monospace',
                    }}
                  >
                    {s.elo}
                  </Typography>
                </Stack>
              </Paper>
            ))}
          </Stack>
        </Box>
      </Box>
    )
  }
}

export default ProfilePage
