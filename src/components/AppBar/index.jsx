import ModeSelect from '~/components/ModeSelect'
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
const AppBar = () => {
  return (
    <Box px={2} sx={{
      width:'100%',
      height:(theme) => theme.trello.appBarHeight,
      display:'flex',
      alignItems:'center',
      justifyContent:'space-between'
    }}>
      <Box sx={{ display:'flex', alignItems:'center', gap:2 }}>
        <AppsIcon sx={{ color:'primary.main' }}/>
        <Box sx={{ display:'flex', alignItems:'center', gap:.5 }}>
          <SvgIcon component={TrelloIcon} inheritViewBox fontSize="small" sx={{ color:'primary.main' }}/>
          <Typography variant='span' sx={{ fontSize:'1.2rem', fontWeight:'bold', color:'primary.main' }}>Trello</Typography>
        </Box>
        <Workspaces />
        <Recent/>
        <Starred />
        <Templates/>
        <Button variant="outlined">CREATE</Button>
      </Box>
      <Box sx={{ display:'flex', alignItems:'center', gap:2 }}>
        <TextField size='small' id="outlined-search" label="Search..." type="search" />
        <ModeSelect/>
        <Tooltip title="Notifications">
          <Badge color="secondary" variant="dot" sx={{ cursor:'pointer' }}>
            <NotificationsNoneOutlinedIcon sx={{ color:'primary.main' }}/>
          </Badge>
        </Tooltip>
        <Tooltip title="Help" sx={{ cursor:'pointer', color:'primary.main' }}>
          <HelpOutlineOutlinedIcon/>
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  )
}

export default AppBar
