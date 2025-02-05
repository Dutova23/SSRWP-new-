import { useTheme } from '@mui/material/styles';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
    const theme = useTheme();

    return (
        <BottomNavigation
            showLabels
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                width: 1.0,
                backgroundColor: theme.palette.success.main, // Заменяем на зеленый цвет из палитры
            }}
        >
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
    )
}

export default Footer;
