import PageContainer from "../../components/PageContainer";
import { Grid, Container, Typography } from "@mui/material";
import theme from "theme";
import AboutUs from 'components/AboutUs'
import Pc from 'assets/PC.svg'

const About = () => {
    return (
        <PageContainer bannerName='About us'>
            <Container maxWidth='lg'>
                <Grid container sx={{ py: 5 }} justifyContent="center" gap={5}>
                    <Grid item xs={12} md={6} sx={{
                        position: 'relative',
                        backgroundImage: `url("${Pc}")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        maxWidth: '400px !important',
                        width: '100% !important',
                        height: '340px',
                        borderRadius: '20px',
                        zIndex: 3,
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            inset: '10px -20px -10px 20px ',
                            border: '1px solid',
                            borderColor: theme.palette.primary.main,
                            borderRadius: 'inherit',
                            zIndex: -1,
                        }
                    }}>
                    </Grid>
                    <Grid item xs={12} md={6} textAlign={{ xs: 'center', md: 'unset' }}>
                        <Typography variant="h4" maxWidth={{ xs: 'auto', md: '350px' }}>BakuDevs haqqında məlumat</Typography>
                        <Typography paddingTop='20px' color='rgba(147, 147, 147, 1)' variant="body1" maxWidth={{ xs: 'auto', md: '553px' }} height='262px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus sed turpis risus molestie auctor vel.
                            Iaculis augue diam tempus aliquet eu, pulvinar feugiat. Suscipit non viverra dignissim dolor augue morbi. Odio maecenas dolor, hac sodales
                            non donec. Felis, non venenatis massa tincidunt massa quis libero in odio. Sapien, quis a viverra odio orci. Pretium molestie blandit faucibus
                            eu, placerat sagittis, odio duis molestie. Sagittis, pretium, mi, faucibus lectus posuere pharetra amet, in.</Typography>
                    </Grid>
                </Grid>
            </Container>
            <AboutUs />
        </PageContainer>
    )
}
export default About;
