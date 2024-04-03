import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
    const theme = useTheme();

    return (
        <AppBar position="static" sx={{ position: 'fixed', up: 0, left: 0, width: 1.0, backgroundColor: theme.palette.success.main}}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Лабораторные
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
