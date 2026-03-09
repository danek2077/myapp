export const WINNER_BLOCK_STYLE = {
  position: 'relative',
  overflow: 'hidden', // Чтобы свечение не вылетало за края
  textAlign: 'center',
  p: 2,
  color: 'white',
  borderRadius: 2,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  // ФОН: Основной темный + Радиальное пятно в углу
  background: `
    radial-gradient(circle at top right, rgba(239, 68, 68, 0.4) 0%, transparent 60%), 
    linear-gradient(180deg, #020617 0%, #0f172a 100%)
  `,

  // Рамка, которая ловит свет
  border: '1px solid rgba(255, 255, 255, 0.05)',
  boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)',

  // Эффект "стекла" (опционально)
  backdropFilter: 'blur(10px)',

  // Псевдоэлемент для дополнительного "блика" (вместо твоего div)
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100px',
    height: '100px',
    background: 'red',
    filter: 'blur(50px)',
    opacity: 0.2,
    zIndex: 0,
  },
} as const
