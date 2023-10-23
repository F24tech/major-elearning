import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';

export default function Loader() {
    const theme = useTheme()
    return (
        <Box sx={{ display: 'flex', width: '100%', height: '100vh', justifyContent: 'center', alignItems: 'center', }} bgcolor={theme.palette.vibrant}>
            <CircularProgress />
        </Box>
    );
}
