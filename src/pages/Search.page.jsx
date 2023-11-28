import { Box, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { baseUrl } from '../utils'
import toast from 'react-hot-toast'

function SearchPage() {
    const location = useLocation().search
    const params = new URLSearchParams(location).get("q");

    console.log(params, location)


    const [courses, setCourses] = useState([])


    const searchCourses = async () => {

        try {
            const url = baseUrl + `/api/courses?filters[name][$containsi]=${params}&populate[thumbnail][fields]`

            const res = await fetch(url)
            const data = res.json()
            console.log(data)
        } catch (error) {
            toast.error("Failed to search")
            console.log("ERROR  : ", error)
        }

    }


    useEffect(() => {
        searchCourses()
    }, [params])

    return (
        <Box p={2}  >

            <Container>

            </Container>
        </Box>
    )
}

export default SearchPage