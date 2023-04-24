import { Grid, Stack, Container, } from "@mui/material"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import homeBoy from 'assets/home-boy.png'
import MissedVideoCallIcon from '@mui/icons-material/MissedVideoCall';

const AboutUs = ({ }) => {
    return (
        <Box bgcolor="#E3F1F2" py={7}>
            <Container maxWidth="lg">
                <Grid container py={7} gap={2}>
                    <Grid item xs={12}>
                        <Typography variant="h4">BakuDevs ilə istədiyiniz biliklərə sahib olun!</Typography>
                        <Typography mt={3} mb={4} variant="body1">Nə üçün tədrisinizi məhz bizdə keçməlisiniz? Bunun üçün ən azı dörd səbəb var:</Typography>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Stack
                            direction="row"
                            maxWidth={600}
                            mx="auto"
                            flexWrap="wrap"
                            sx={{
                                gap: '25px',
                                '& .paper_about_us': {
                                    width: 260,
                                    textAlign: 'center',
                                    padding: '10px',
                                    height: 200,
                                    borderRadius: '20px'
                                },
                                '& h6': {
                                    fontWeight: 600
                                },
                                '& .svg-container': {
                                    width: 50,
                                    height: 50,
                                    borderRadius: '10px',
                                    mx: 'auto'
                                },
                                '& svg': {
                                    fontSize: '48px',
                                    color: 'white'
                                },

                            }}
                        >
                            <Paper className="paper_about_us" elevation={0}>
                                <Box className="svg-container" sx={{ backgroundColor: '#F57170' }}>
                                    <MissedVideoCallIcon />
                                </Box>
                                <Typography variant="h6" component="h6">Sərfəli qiymət</Typography>
                                <Typography variant="body1">Ayda cəmi 10 AZN ödəniş etməklə saytdımızdaki bütün kurslar sizin üçün tam açıq olacaq!</Typography>
                            </Paper>
                            <Paper sx={{ position: 'relative', top: '30px' }} className="paper_about_us" elevation={0}>
                                <Box className="svg-container" sx={{ backgroundColor: '#64B7F4' }}>
                                    <MissedVideoCallIcon />
                                </Box>
                                <Typography variant="h6" component="h6">Sərfəli qiymət</Typography>
                                <Typography variant="body1">Ayda cəmi 10 AZN ödəniş etməklə saytdımızdaki bütün kurslar sizin üçün tam açıq olacaq!</Typography>
                            </Paper>
                            <Paper className="paper_about_us" elevation={0}>
                                <Box className="svg-container" sx={{ backgroundColor: '#46AB99' }}>
                                    <MissedVideoCallIcon />
                                </Box>
                                <Typography variant="h6" component="h6">Sərfəli qiymət</Typography>
                                <Typography variant="body1">Ayda cəmi 10 AZN ödəniş etməklə saytdımızdaki bütün kurslar sizin üçün tam açıq olacaq!</Typography>
                            </Paper>
                            <Paper sx={{ position: 'relative', top: '30px' }} className="paper_about_us" elevation={0}>
                                <Box className="svg-container" sx={{ backgroundColor: '#FFAE01' }}>
                                    <MissedVideoCallIcon />
                                </Box>
                                <Typography variant="h6" component="h6">Sərfəli qiymət</Typography>
                                <Typography variant="body1">Ayda cəmi 10 AZN ödəniş etməklə saytdımızdaki bütün kurslar sizin üçün tam açıq olacaq!</Typography>
                            </Paper>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Box sx={{
                            backgroundImage: `url("${homeBoy}")`,
                            width: 440,
                            height: 440,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'top',
                            backgroundColor: '#c4cfcf',
                            borderRadius: '50%'
                        }}>

                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
export default AboutUs
