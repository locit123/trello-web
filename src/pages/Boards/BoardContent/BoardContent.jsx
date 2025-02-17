import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'


const BoardContent = () => {
  return (
    <Box sx={{
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'), borderBottom:'1px solid white',
      width:'100%',
      height:(theme) => theme.trello.boardContentHeight,
      p:'10px 0' }}>
      {/* Box Column 01*/}
      <ListColumns />
    </Box>
  )
}

export default BoardContent
