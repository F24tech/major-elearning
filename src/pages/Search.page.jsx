import { Box, Card, Container, Grid, ListItemText, MenuItem, MenuList, Typography, Icon, Divider, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { baseUrl } from '../utils'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import Cards from '../components/pages/home/card'


function SearchPage() {
    const location = useLocation().search
    const searchQuery = new URLSearchParams(location).get("q");

    const { data: categories } = useSelector(state => state.categories)

    const navigate = useNavigate()

    const [courses, setCourses] = useState({ data: [], meta: {} })







    const searchCourses = async () => {

        try {
            const url = baseUrl + `/api/courses?filters[name][$containsi]=${searchQuery}&populate[thumbnail][fields]`

            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            setCourses(data)
        } catch (error) {
            toast.error("Failed to search")
            console.log("ERROR  : ", error)
        }

    }

    console.log(courses)


    useEffect(() => {
        if (searchQuery) {
            searchCourses()
        }
    }, [searchQuery])

    return (
        <Box p={2}  >

            <Container>
                <Grid container md={12} my={3} >
                    <Grid md={3} item>
                        <Typography variant="h6" mb={1}> Cateogories </Typography>
                        <Card style={{ borderRadius: 12, padding: 12 }} >
                            <MenuList>
                                {categories.map((cat, index) =>
                                    <>
                                        <MenuItem onClick={() => navigate(`/category/${cat.id}`)} >
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
                        {searchQuery === "" ?
                            <Typography variant="h6" align='center' mb={1} ml={5} > Please Search for courses ....</Typography>
                            :
                            <Typography variant="h6" mb={1} ml={5} > Search results for {searchQuery} </Typography>
                        }

                        {(searchQuery === "" || courses.data.length === 0) && <Container style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '40vh',
                            border: 'none'
                        }}>

                            <iframe style={{ border: 'none' }} src="https://lottie.host/embed/3c09f83a-7432-4a06-b563-d0ddff7b95a6/Ted6dwvgxt.json"></iframe>
                            <Typography variant="h6" mt={2} >No courses available</Typography>
                        </Container>}

                        <Stack flexDirection={"row"} gap={2} flexWrap={"wrap"} justifyContent={"space-evenly"}  >
                            {searchQuery !== "" && courses.data.map((course,) =>
                                <Cards title={course.attributes.name} key={course.id} id={course.id} image={course.attributes.thumbnail.data.attributes.url} />
                            )}
                        </Stack>
                    </Grid>
                </Grid>

            </Container>
        </Box >
    )
}

export default SearchPage