import { Container } from "@mui/material";
import CourseCard from "components/CourseCard";
import PageContainer from "../../components/PageContainer";
import courseImg from 'assets/card-image-1.svg'
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PillButton from "components/PillButton";
import homeGradient from 'assets/home-gradient.svg'
import homeGirl from 'assets/home-girl.png'
import Box from "@mui/material/Box";
import AboutUs from "components/AboutUs";
import CoursesComponent from "../../components/Courses";


const Home = () => {
    return (
        <PageContainer>
            <Stack
                sx={{
                    backgroundImage: `url("${homeGradient}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    minHeight: `calc(100vh - 65px )`,
                    zIndex: 10,
                    position: 'relative',
                    '&::before': {
                        content: '""',
                        width: "100vw",
                        height: "100vh",
                        maxHeight: 500,
                        maxWidth: 700,
                        left: 0,
                        top: 0,
                        position: 'absolute',
                        background: 'linear-gradient(126deg, rgba(249,234,153,0.5) 0%, rgba(45,133,237,0) 35%)'
                    }
                }}
            >
                <Container maxWidth="lg" sx={{
                    zIndex: 10,
                    position: 'relative',
                }}>
                    <Grid container py={5} alignItems="center">
                        <Grid item md={6} xs={12}>
                            <Typography variant="h2">
                                <Typography variant="h2" color="secondary" component="span">Proqramlaşdırmanı </Typography>
                                onlayn olaraq <br />
                                bizdən öyrənin
                            </Typography>
                            <PillButton txt="Kurslar" sx={{ mx: '0', my: 3 }} />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Box
                                sx={(theme) => ({
                                    position: 'relative',
                                    backgroundImage: `url("${homeGirl}")`,
                                    width: 500,
                                    height: 500,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        width: "80%",
                                        height: "80%",
                                        border: '1px solid ' + theme.palette.primary.main,
                                        borderRadius: '50%',
                                        zIndex: -1,
                                        top: 100,
                                        right: 100

                                    },
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        width: "100%",
                                        height: "100%",
                                        border: '1px dashed ' + theme.palette.primary.main,
                                        borderRadius: '50%',
                                        zIndex: -1,
                                        top: 50,
                                        right: 100
                                    },
                                    '& > .daire': {
                                        position: 'absolute',
                                        width: 30,
                                        height: 30,
                                        backgroundColor: theme.palette.primary.main,
                                        borderRadius: '50%',
                                        zIndex: -1,
                                        top: 50,
                                        left: 100
                                    },
                                    '& > .daire-sec': {
                                        position: 'absolute',
                                        width: 60,
                                        height: 60,
                                        backgroundColor: theme.palette.secondary.main,
                                        borderRadius: '50%',
                                        zIndex: -1,
                                        bottom: 100,
                                        left: 80
                                    }
                                })}
                            >
                                <div className="daire"></div>
                                <div className="daire-sec"></div>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Stack>
            <Container maxWidth="lg" >
                <CoursesComponent hasTitle />
                <PillButton btnHref="/courses" txt="Bütün kurslar" sx={{ my: 5 }} />
            </Container>
            <AboutUs />
        </PageContainer>
    )
}
export default Home;
