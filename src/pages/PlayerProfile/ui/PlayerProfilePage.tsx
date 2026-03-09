import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import { Box, Paper, Typography, Stack, Chip } from '@mui/material'
import { Link, useParams } from 'react-router'

import { useGetPlayerBySlugQuery } from '@src/entities/player'
import Container from '@src/shared/ui/Container/Container'

export const PlayerProfilePage = () => {
  const { slug } = useParams<{ slug: string }>()
  console.log()
  const { data, error, isLoading } = useGetPlayerBySlugQuery(slug as string)
  if (!slug) {
    return <div>Пизда</div>
  }
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    console.log(error)
    return <div>Error</div>
  }
  if (!data) {
    return <div>error</div>
  }

  const player = data
  return (
    <Container>
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
                    fontSize: { xs: '3rem', md: `${`3rem`}` },
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
                </Stack>
              </Box>

              <Stack
                direction={{ xs: 'column', md: 'row' }}
                justifyContent="space-between"
              >
                <Box
                  sx={{
                    textAlign: 'center',
                    py: 2,
                    marginRight: 5,
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
                    ALL-TIME SCORE
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
                    {player.allTime.score}
                  </Typography>
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
                    ALL-TIME ELO
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
                    {player.allTime.elo}
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Paper>

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
              <Link to={`/player/${player.slug}/season/${s.season}`}>
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
              </Link>
            ))}
          </Stack>
        </Box>
      </Box>
    </Container>
  )
}
