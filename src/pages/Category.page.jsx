import { Box, Card, Container, Divider, Grid, ListItemText, MenuItem, MenuList, Stack, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Cards from '../components/pages/home/card';


function Category() {
    const query = useParams()

    console.log(location, query.id)


    const { data: categories } = useSelector(state => state.categories)

    const navigate = useNavigate()


    const category = categories.filter(category => category.id.toString() === query.id)[0]



    console.log("CATEGORIES ", category,)


    return (
        <Box p={2}  >

            <Container>
                <Grid container md={12} my={3} >
                    <Grid md={3} item>
                        <Typography variant="h6" mb={1}> Categories </Typography>
                        <Card style={{ borderRadius: 12, padding: 12 }} >
                            <MenuList>
                                {categories.map((cat, index) =>
                                    <>
                                        <MenuItem selected={query.id === cat.id.toString()} onClick={() => navigate(`/category/${cat.id}`)} >
                                            <ListItemText variant="inherit">{cat.name}</ListItemText>
                                            <Typography variant="body2" color="text.secondary">
                                                <KeyboardArrowRightIcon />
                                            </Typography>

                                        </MenuItem>
                                        {index !== categories.length - 1 && <Divider />}
                                    </>
                                )}
                            </MenuList>
                        </Card>
                    </Grid>
                    <Grid md={9} px={2} item>

                        {category.courses.length !== 0 && <Typography variant="h6" mb={1}> Courses Available </Typography>}

                        <Stack flexDirection={"row"} gap={2}  >
                            {category.courses.map((course) =>
                                <Cards title={course.name} id={course.id} image={course.thumbnail.url} />
                            )}


                            {category.courses.length === 0 && <Container style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '40vh',
                                border: 'none'
                            }}>

                                <iframe style={{ border: 'none' }} src="https://lottie.host/embed/3c09f83a-7432-4a06-b563-d0ddff7b95a6/Ted6dwvgxt.json"></iframe>
                                <Typography variant="h6" mt={2} >No courses available in this category!</Typography>
                            </Container>}

                        </Stack>

                    </Grid>
                </Grid>

            </Container>
        </Box >
    )
}

export default Category