import { Button, Stack, Typography } from "@mui/material";
import Card from "components/CourseCard";
import dbJson from 'data/db.json';
import { useEffect, useState } from "react";
import { Course, CourseType } from 'types';



const btns: Course[] = ['all', 'frontend', 'ui/ux', 'backend', 'python']

const CoursesComponent = ({ hasTitle = false }: { hasTitle?: boolean; }) => {
    const [filterBtn, setFilterBtn] = useState<Course>("all")
    const [courses, setCourses] = useState<CourseType[]>([])

    useEffect(() => {
        (async () => {
            const data = dbJson.courses
            if (filterBtn === 'all') {
                setCourses(data)
            } else {
                setCourses(data.filter(({ course }) => course === filterBtn))
            }
        })()
    }, [filterBtn])
    return (
        <>
            <Stack py={4} mb={3} justifyContent='center' direction='row' gap='10px' alignItems="center">
                {
                    hasTitle && <Typography sx={{ flexGrow: 1 }} variant="h4" my={2} fontWeight={600}>Populyar kurslar</Typography>
                }
                {
                    btns.map((ad) => <Button
                        key={ad}
                        onClick={() => {
                            setFilterBtn(ad)
                        }}
                        variant={filterBtn === ad ? "contained" : "outlined"}>
                        {ad.toUpperCase()}</Button>
                    )
                }
            </Stack>
            <Stack direction='row' flexWrap='wrap' justifyContent={{ xs: 'center', lg: 'space-between' }} gap={3}>
                {
                    courses.map(({ id, lessonCount, course, img, description }: any) => {
                        return (
                            <Card key={id} lessonCount={lessonCount} course={course} img={img} description={description} />
                        )
                    })
                }
            </Stack>
        </>
    )
}
export default CoursesComponent
