import './navbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Brightness2OutlinedIcon from '@mui/icons-material/Brightness2Outlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import useDarkMode from '../../hooks/useDarkMode';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {

    const { toggle, darkMode } = useDarkMode()
    const { currentUser } = useAuth()  

    return (
        <div className='navbar'>
            <div className="left">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <p>social<span>media</span></p>
                </Link>
                <HomeOutlinedIcon style={{ cursor: 'pointer' }} />
                { 
                    darkMode ? 
                    <WbSunnyOutlinedIcon onClick={() => toggle()} style={{ cursor: 'pointer' }} />
                    : 
                    <Brightness2OutlinedIcon onClick={() => toggle()} style={{ cursor: 'pointer' }} /> 
                }
                <AppsOutlinedIcon style={{ cursor: 'pointer' }} />
                <div className="search">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder='Search...' />
                </div>
            </div>
            <div className="right">
                <PersonOutlinedIcon />
                <EmailOutlinedIcon />
                <NotificationsActiveOutlinedIcon />
                <div className="user">
                    <img src="/pamela.jpeg" alt="" />
                    <span>{ currentUser.name }</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar