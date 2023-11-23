import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import Card from './card';
import { Container, Paper, Stack } from '@mui/material';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;


    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}



export default function BasicTabs() {
    const [value, setValue] = React.useState(0);
    const { data: categoriesData } = useSelector(state => state.categories)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    {categoriesData.map((category) => (
                        <Tab label={category.name} key={category} >
                            {category.name}
                        </Tab>
                    ))}
                </Tabs>
            </Box>
            {categoriesData.map((category, index) => (

                <CustomTabPanel value={value} index={index}>
                    <Stack flexDirection={"row"} gap={2}  >
                        {category.courses.map((course) => <Card title={course.name} id={course.id} image={course.thumbnail.url} />)}
                        {category.courses.length === 0 && <Container style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '40vh',
                            border: 'none'
                        }}>

                            <iframe style={{ border: 'none' }} src="https://lottie.host/embed/3c09f83a-7432-4a06-b563-d0ddff7b95a6/Ted6dwvgxt.json"></iframe>
                            <Typography variant="h6" mt={2} >No course available</Typography>
                        </Container>}

                    </Stack>
                </CustomTabPanel>
            ))}

        </Box>
    );
}
