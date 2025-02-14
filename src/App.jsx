import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import Typography from '@mui/material/Typography'
import { useColorScheme } from '@mui/material/styles'

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  return (
    <Button onClick={() => {
      setMode(mode === 'light' ? 'dark' : 'light')
    }}>
      {mode === 'light' ? 'dark': 'light'}
    </Button>
  )
}

function App() {
  return (
    <>
      <ModeToggle />
      <hr/>
      <Typography variant='caption' color={'text.primary'}>Hello World</Typography>
      <div>LocDev</div>
      <Button variant="text">Text</Button>
      <Button variant="contained">Container</Button>
      <Button variant="outlined">Outlined</Button>
      <DeleteIcon />
    </>
  )
}

export default App
