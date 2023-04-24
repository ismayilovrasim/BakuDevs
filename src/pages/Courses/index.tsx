import { Container } from "@mui/material";
import PageContainer from "components/PageContainer";
import CoursesComponent from "../../components/Courses";


const Courses = () => {
    return (
        <PageContainer bannerName='Kurslar'>
            <Container maxWidth="lg" sx={{ py: 5, mb: 3 }}>
                <CoursesComponent />
            </Container>
        </PageContainer >
    )
}

export default Courses
