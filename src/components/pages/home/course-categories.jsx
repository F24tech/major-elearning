import { Stack, Typography } from "@mui/material";
import React from "react";
import CourseTabs from "./course-card";

function CourseCategories() {
    return (
        <Stack p={4} gap={2} >
            <Typography variant="h4" component="h4">A broad selection of courses</Typography>
            <Typography>
                Choose from over 210,000 online video courses with new additions
                published every month
            </Typography>
            <CourseTabs />

            <Stack>
                <Typography variant="h4" component="h4">A broad selection of courses</Typography>
            </Stack>


        </Stack>
    );
}

export default CourseCategories;
