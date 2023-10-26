import React from 'react'
import { CourseCategories, Hero, TrustCompanies } from '../components'

function HomePage() {
    return (
        <React.Fragment>
            <Hero />
            <TrustCompanies />
            <CourseCategories />
        </React.Fragment>
    )
}

export default HomePage