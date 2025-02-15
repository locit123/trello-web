import Box from '@mui/material/Box'

const BoardContent = () => {
  return (
    <Box sx={{ backgroundColor:'secondary.main',
      width:'100%',
      display:'flex',
      alignItems:'center',
      height:(theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})` }}>
        Board Content
    </Box>
  )
}

export default BoardContent
