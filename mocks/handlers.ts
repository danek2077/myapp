import { delay, http, HttpResponse } from 'msw'
import { Players } from '../src/services/types'

const data: Players = [
  {
    id: 'phantom-st',
    slug: 'phantom',
    name: 'PHANTOM',
    position: 'ST',
    history: [
      {
        season: 5,
        elo: 2850,
        rank: 'Legend',
        stats: { goals: 2.5, assists: 0.3, passes: 78, overallScore: 9.2 },
      },
      {
        season: 4,
        elo: 2600,
        rank: 'Master',
        stats: { goals: 1.9, assists: 0.4, passes: 75, overallScore: 8.7 },
      },
    ],
  },
  {
    id: 'neo-king',
    slug: 'neo-king',
    name: 'NEO_KING',
    position: 'DM',
    history: [
      {
        season: 5,
        elo: 2720,
        rank: 'Master',
        stats: { goals: 0.9, assists: 2.1, passes: 95, overallScore: 8.9 },
      },
      {
        season: 4,
        elo: 2680,
        rank: 'Master',
        stats: { goals: 0.7, assists: 1.8, passes: 92, overallScore: 8.5 },
      },
    ],
  },
  {
    id: 'wall-cyber',
    slug: 'cyber-wall',
    name: 'CYBER_WALL',
    position: 'ST',
    history: [
      {
        season: 5,
        elo: 2550,
        rank: 'Diamond',
        stats: { goals: 0.1, assists: 0.2, passes: 88, overallScore: 7.9 },
      },
      {
        season: 4,
        elo: 2400,
        rank: 'Platinum',
        stats: { goals: 0.0, assists: 0.1, passes: 82, overallScore: 7.5 },
      },
    ],
  },
  {
    id: 'flash-wing',
    slug: 'flash',
    name: 'FLASH',
    position: 'DM',
    history: [
      {
        season: 5,
        elo: 2490,
        rank: 'Diamond',
        stats: { goals: 1.2, assists: 1.4, passes: 80, overallScore: 8.3 },
      },
    ],
  },
  {
    id: 'iron-mid',
    slug: 'iron-man',
    name: 'IRON_MAN',
    position: 'DM',
    history: [
      {
        season: 5,
        elo: 2410,
        rank: 'Diamond',
        stats: { goals: 0.4, assists: 0.8, passes: 91, overallScore: 7.8 },
      },
      {
        season: 4,
        elo: 2450,
        rank: 'Diamond',
        stats: { goals: 0.5, assists: 0.7, passes: 89, overallScore: 8.0 },
      },
    ],
  },
  {
    id: 'sniper-elite',
    slug: 'sniper',
    name: 'SNIPER',
    position: 'ST',
    history: [
      {
        season: 5,
        elo: 2380,
        rank: 'Platinum',
        stats: { goals: 1.7, assists: 0.6, passes: 72, overallScore: 8.1 },
      },
    ],
  },
  {
    id: 'glitch-01',
    slug: 'glitch',
    name: 'GLITCH',
    position: 'GK',
    history: [
      {
        season: 5,
        elo: 2300,
        rank: 'Platinum',
        stats: { goals: 0.0, assists: 0.1, passes: 65, overallScore: 7.2 },
      },
    ],
  },
  {
    id: 'titan-force',
    slug: 'titan',
    name: 'TITAN',
    position: 'ST',
    history: [
      {
        season: 5,
        elo: 2250,
        rank: 'Gold',
        stats: { goals: 0.2, assists: 0.1, passes: 84, overallScore: 7.4 },
      },
      {
        season: 4,
        elo: 2100,
        rank: 'Gold',
        stats: { goals: 0.1, assists: 0.0, passes: 79, overallScore: 7.0 },
      },
    ],
  },
  {
    id: 'sonic-run',
    slug: 'sonic',
    name: 'SONIC',
    position: 'AM',
    history: [
      {
        season: 5,
        elo: 2180,
        rank: 'Gold',
        stats: { goals: 0.3, assists: 1.2, passes: 87, overallScore: 7.6 },
      },
    ],
  },
  {
    id: 'rookie-star',
    slug: 'rookie',
    name: 'ROOKIE',
    position: 'ST',
    history: [
      {
        season: 5,
        elo: 1950,
        rank: 'Silver',
        stats: { goals: 0.8, assists: 0.2, passes: 60, overallScore: 6.8 },
      },
    ],
  },
]

export const handlers = [
  http.get('http://localhost:4000/api/docs_list', async () => {
    await delay(1000)
    return HttpResponse.json(data)
  }),
  http.get('http://localhost:4000/api/docs_list/:slug', async ({ params }) => {
    const { slug } = params

    const player = data.find((p) => p.slug === slug)

    await delay(1000)

    // Если игрок не найден — отдаем 404
    if (!player) {
      return new HttpResponse(null, { status: 404 })
    }

    return HttpResponse.json(player)
  }),
]
