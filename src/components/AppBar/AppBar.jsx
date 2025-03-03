import ModeSelect from '~/components/ModeSelect/ModeSelect'
import Box from '@mui/material/Box'
import AppsIcon from '@mui/icons-material/Apps'
import SvgIcon from '@mui/material/SvgIcon'
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg'
import Typography from '@mui/material/Typography'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import Profiles from './Menus/Profiles'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
const AppBar = () => {
  const [searchValue, setSearchValue] = useState('')
  const searchValueBool = Boolean(searchValue)
  return (
    <Box sx={{
      width:'100%',
      height:(theme) => theme.trello.appBarHeight,
      display:'flex',
      alignItems:'center',
      justifyContent:'space-between',
      gap:2,
      overflowX:'auto',
      '&::-webkit-scrollbar-track':{
        m:2
      },
      px:2,
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0')
    }}>
      <Box sx={{ display:'flex', alignItems:'center', gap:2 }}>
        <AppsIcon sx={{ color:'white' }}/>
        <Box sx={{ display:'flex', alignItems:'center', gap:.5 }}>
          <SvgIcon component={TrelloIcon} inheritViewBox fontSize="small" sx={{ color:'white' }}/>
          <Typography variant='span' sx={{ fontSize:'1.2rem', fontWeight:'bold', color:'white' }}>Trello</Typography>
        </Box>
        <Box sx={{ display: { xs:'none', md:'flex' }, gap:1 }}>
          <Workspaces />
          <Recent/>
          <Starred />
          <Templates/>
          <Button sx={{ color:'white', border:'none', '&:hover':{ border:'none' } }} startIcon={<LibraryAddIcon/>} variant="outlined">CREATE</Button>
        </Box>
      </Box>
      <Box sx={{ display:'flex', alignItems:'center', gap:2 }}>
        <TextField
          size='small'
          id="outlined-search"
          label="Search"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          sx={{
            minWidth:120,
            maxWidth:170,
            '& label':{ color:'white' },
            '& input':{ color:'white' },
            '& label.Mui-focused': { color:'white' },
            '& .MuiOutlinedInput-root':{
              '& fieldset':{ borderColor:'white' },
              '&:hover fieldset':{ borderColor:'white' },
              '&.Mui-focused fieldset':{ borderColor:'white' } } }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon sx={{ color:'white' }}/>
              </InputAdornment>
            ),
            endAdornment:(
              <InputAdornment position='end'>
                <CloseIcon onClick={() => setSearchValue('')} fontSize='small' sx={{ color:searchValueBool ? 'white' : 'transparent !important', cursor:'pointer' }}/>
              </InputAdornment>
            )
          }}

        />
        <ModeSelect/>
        <Tooltip title="Notifications">
          <Badge color="warning" variant="dot" sx={{ cursor:'pointer' }}>
            <NotificationsNoneOutlinedIcon sx={{ color:'white' }}/>
          </Badge>
        </Tooltip>
        <Tooltip title="Help" sx={{ cursor:'pointer', color:'white' }}>
          <HelpOutlineOutlinedIcon/>
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  )
}

export default AppBar
