import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import TabIndicator from '@mui/material/Tabs';
import Typography from '@mui/material/Typography'
function App() {
  let x = 'loc';
  return (
    <>
    <Typography variant='caption' color={'text.primary'}>Hello World</Typography>
      <div>LocDev</div>
      <Button variant="text">Text</Button>
      <Button variant="contained">Container</Button>
      <Button variant="outlined">Outlined</Button>
      <DeleteIcon />
    </>
  );
}

export default App;
