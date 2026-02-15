import FirstPageIcon from '@mui/icons-material/FirstPage'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import LastPageIcon from '@mui/icons-material/LastPage'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import { useTheme } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableFooter from '@mui/material/TableFooter'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import * as React from 'react'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import {
  Stack,
  Tooltip,
  TableHead,
  TablePaginationActionsProps,
} from '@mui/material'
import { GenericTableProps } from './types/types'
import { Link } from 'react-router'

const headStyles = {
  container: {
    background: 'linear-gradient(180deg, #020617 0%, #0f172a 100%)',
    position: 'relative',
    overflow: 'hidden', // Чтобы свечение не вылезало за границы
  },
  glow: {
    position: 'absolute',
    top: -40,
    right: -40,
    width: 128,
    height: 128,
    borderRadius: '50%',
    backgroundColor: 'rgba(220, 38, 38, 0.2)', // red-600/20
    filter: 'blur(48px)',
    pointerEvents: 'none',
    zIndex: 0,
  },
  baseCell: {
    color: '#f8fafc',
    fontWeight: 'bold',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    fontSize: '0.8rem',
    borderBottom: 'none',
    zIndex: 1,
    position: 'relative',
  },
  numberCell: {
    color: '#ef4444',
    fontWeight: '900',
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    borderBottom: 'none',
  },
} as const

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme()
  const { count, page, rowsPerPage, onPageChange } = props

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, 0)
  }

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, page - 1)
  }

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, page + 1)
  }

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
  }

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  )
}

export default function CustomPaginationActionsTable<T>(
  props: GenericTableProps<T>,
) {
  const { columns, data } = props

  const [page, setPage] = React.useState(0)
  const rowsPerPage = 5
  const paginatedData = data.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  )

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage)
  }

  const getValue = (row: any, key: any) => {
    if (key in row) {
      return row[key]
    }
    return row.individualStats?.[key] ?? 'undefined'
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="custom pagination table">
        <TableHead
          sx={{
            // Оставляем только глубокий темный фон
            background: 'linear-gradient(180deg, #020617 0%, #0f172a 100%)',
            position: 'relative',
          }}
        >
          <div
            className="absolute -top-30 right-0 h-32 w-40 rounded-full bg-red-600/20 bg-red-600/50 blur-3xl"
            style={{ zIndex: 0, pointerEvents: 'none' }}
          ></div>

          <TableRow style={{ position: 'relative', zIndex: 1 }}>
            <TableCell
              align="center"
              sx={{
                color: '#ef4444',
                fontWeight: '900',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                borderBottom: 'none', // Убеждаемся, что стандартная линия MUI тоже убрана
              }}
            >
              №
            </TableCell>

            {columns.map((col) => (
              <TableCell
                key={String(col.key)}
                align="center"
                sx={{
                  color: '#f8fafc',
                  fontWeight: 'bold',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  fontSize: '0.8rem',
                  borderBottom: 'none', // Убираем и здесь
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  spacing={0.5}
                >
                  <span style={{ whiteSpace: 'nowrap' }}>{col.header}</span>
                  {col.hint && (
                    <Tooltip title={col.hint} arrow>
                      <HelpOutlineIcon
                        sx={{
                          fontSize: '0.9rem',
                          cursor: 'help',
                          opacity: 0.5,
                          '&:hover': { opacity: 1 },
                        }}
                      />
                    </Tooltip>
                  )}
                </Stack>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedData.map((row, index) => {
            const globalIndex = index + page * rowsPerPage + 1
            return (
              <TableRow key={globalIndex}>
                <TableCell align="center">{globalIndex}</TableCell>
                {columns.map((col) => (
                  <TableCell
                    key={String(col.key)}
                    align={col.align || 'center'}
                    sx={{ whiteSpace: 'nowrap' }}
                  >
                    {col.render ? col.render(row) : getValue(row, col.key)}
                  </TableCell>
                ))}
              </TableRow>
            )
          })}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5]}
              colSpan={3}
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              slotProps={{
                select: {
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                },
              }}
              onPageChange={handleChangePage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )
}
