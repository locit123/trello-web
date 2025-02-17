import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
const MENU_STYLES = {
  color:'white',
  backgroundColor:'transparent',
  border:'none',
  px:'5px',
  borderRadius:'4px',
  '.MuiSvgIcon-root':{ color:'white' },
  '&:hover':{ bgcolor:'primary.50' }
}

const BoardBar = () => {
  return (
    <Box sx={{
      width:'100%',
      height:(theme) => theme.trello.boardBarHeight,
      display:'flex',
      alignItems:'center',
      justifyContent:'space-between',
      gap:2,
      overflowX:'auto',
      px:2,
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'), borderBottom:'1px solid white' }}>
      <Box sx={{ display:'flex',
        alignItems:'center',
        gap:2 }}>
        <Chip sx={MENU_STYLES} clickable icon={<DashboardIcon />} label="Loc Dev MERN Stack Board" />
        <Chip sx={MENU_STYLES} clickable icon={<VpnLockIcon />} label="Public/Private Workspace" />
        <Chip sx={MENU_STYLES} clickable icon={<AddToDriveIcon />} label="Add To Google Drive" />
        <Chip sx={MENU_STYLES} clickable icon={<BoltIcon />} label="Automation" />
        <Chip sx={MENU_STYLES} clickable icon={<FilterListIcon />} label="Filters" />
      </Box>
      <Box sx={{ display:'flex',
        alignItems:'center',
        gap:2 }}>
        <Button startIcon={<PersonAddIcon/>} variant="outlined"
          sx={{
            color:'white',
            borderColor:'white',
            '&:hover': { borderColor:'white' } }}
        >Invite</Button>
        <AvatarGroup max={4} sx={{
          '& .MuiAvatar-root': {
            width:34,
            height:34,
            fontSize:16,
            border:'none'
          } }}>
          <Tooltip title='loc dev'>
            <Avatar src='https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-1/474684134_642690195087042_1622963473181826086_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_ohc=4Vqs9C8EIz4Q7kNvgHtkoS3&_nc_oc=Adi6_0HTubgLTukED7LTNhggMLNIPmurj9E9mtoAjD1P6C2BR8z7ROHZ4tyBq6fIa-wcZ_igvHKB0Ejysc8JfdX6&_nc_zt=24&_nc_ht=scontent.fsgn2-4.fna&_nc_gid=AloQL-I6zDhKXz9kWbY_4qp&oh=00_AYAL2VqM-83WgSdBwl8VpOWS7PuN7K0L7dcIZZmJS9NT-g&oe=67B68314' alt='loc_dev'/>
          </Tooltip>
          <Tooltip title='loc dev'>
            <Avatar src='https://thuthuatnhanh.com/wp-content/uploads/2020/03/hinh-anh-girl-xinh-dep.jpg' alt='loc_dev'/>
          </Tooltip><Tooltip title='loc dev'>
            <Avatar src='https://thuthuatnhanh.com/wp-content/uploads/2019/07/anh-nen-gai-dep-nhat-ban-cho-may-tinh.jpg' alt='loc_dev'/>
          </Tooltip><Tooltip title='loc dev'>
            <Avatar src='https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-1/474684134_642690195087042_1622963473181826086_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_ohc=4Vqs9C8EIz4Q7kNvgHtkoS3&_nc_oc=Adi6_0HTubgLTukED7LTNhggMLNIPmurj9E9mtoAjD1P6C2BR8z7ROHZ4tyBq6fIa-wcZ_igvHKB0Ejysc8JfdX6&_nc_zt=24&_nc_ht=scontent.fsgn2-4.fna&_nc_gid=AloQL-I6zDhKXz9kWbY_4qp&oh=00_AYAL2VqM-83WgSdBwl8VpOWS7PuN7K0L7dcIZZmJS9NT-g&oe=67B68314' alt='loc_dev'/>
          </Tooltip><Tooltip title='loc dev'>
            <Avatar src='https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-1/474684134_642690195087042_1622963473181826086_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_ohc=4Vqs9C8EIz4Q7kNvgHtkoS3&_nc_oc=Adi6_0HTubgLTukED7LTNhggMLNIPmurj9E9mtoAjD1P6C2BR8z7ROHZ4tyBq6fIa-wcZ_igvHKB0Ejysc8JfdX6&_nc_zt=24&_nc_ht=scontent.fsgn2-4.fna&_nc_gid=AloQL-I6zDhKXz9kWbY_4qp&oh=00_AYAL2VqM-83WgSdBwl8VpOWS7PuN7K0L7dcIZZmJS9NT-g&oe=67B68314' alt='loc_dev'/>
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
