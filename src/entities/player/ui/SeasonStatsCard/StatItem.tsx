import { Tooltip, Card, Box, Typography, Stack } from '@mui/material'
import React from 'react'

export const StatItem = ({
  label,
  value,
  icon,
  hint,
}: {
  label: string
  value: string | number
  icon: any
  hint?: string
}) => (
  <Tooltip title={hint || ''} arrow>
    <Stack direction="row" alignItems="center" spacing={1} sx={{ p: 0.5 }}>
      <Box sx={{ color: 'primary.main', display: 'flex', fontSize: '1.2rem' }}>
        {React.cloneElement(icon, { fontSize: 'inherit' })}
      </Box>
      <Box>
        <Typography
          variant="caption"
          color="text.secondary"
          display="block"
          sx={{
            lineHeight: 1,
            fontSize: '0.65rem',
            textTransform: 'uppercase',
          }}
        >
          {label}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
          {value}
        </Typography>
      </Box>
    </Stack>
  </Tooltip>
)
