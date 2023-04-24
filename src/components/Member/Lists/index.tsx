import { Box } from "@mui/system";
import CourseCard from "../../CourseCard"
import courseImg from "assets/card-image-1.svg"


const Lists = ({ }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 1, marginLeft: 3 }}>
            <CourseCard inWishlist={true} lessonCount={8} course="Frontend" description="Lorem ipsum dolor sit amet" img={courseImg} />
            <CourseCard inWishlist={true} lessonCount={6} course="Backend" description="Lorem ipsum dolor sit amet" img={courseImg} />
            <CourseCard inWishlist={true} lessonCount={24} course="Frontend" description="Lorem ipsum dolor sit amet" img={courseImg} /></Box>
    )
}
export default Lists
