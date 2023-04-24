import { Box, Container, IconButton, Stack, TextField, Typography } from "@mui/material"
import { ReactComponent as Logo } from 'assets/FullLogoWhite.svg'
import EastIcon from '@mui/icons-material/East';
import Divider from '@mui/material/Divider'

const Footer = ({ }) => {
    return (
        <Box component="footer" bgcolor="primary.main">
            <Container maxWidth="lg" sx={{
                mx: 'auto',
                py: 4,
                '& *': {
                    color: 'white',
                    textDecoration: 'none'
                },
                '& input': {
                    paddingRight: '70px'
                }
            }}>
                <Stack py={4} direction="row" flexWrap="wrap" justifyContent="space-between" sx={{
                    '& li': {
                        mb: 1
                    }
                }}>
                    <Box sx={{ maxWidth: 250 }}>
                        <Logo />
                        <Typography mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                    </Box>
                    <Box component="ul">
                        <Box component="li">
                            <a href="#">Frontend</a>
                        </Box>
                        <Box component="li">
                            <a href="#">Backend</a>
                        </Box>
                        <Box component="li">
                            <a href="#">UI/UX</a>
                        </Box>
                    </Box>
                    <Box component="ul">
                        <Box component="li">
                            <a href="#">Əsas səhifə</a>
                        </Box>
                        <Box component="li">
                            <a href="#">Kurslar</a>
                        </Box>
                        <Box component="li">
                            <a href="#">Haqqımızda</a>
                        </Box>
                        <Box component="li">
                            <a href="#">Əlaqə</a>
                        </Box>
                    </Box>
                    <Box sx={{ maxWidth: 300 }}>
                        <Typography>Yeniliklərdən xəbərdar olmaq üçün
                            <Typography component="a" fontWeight={600} href="/signup"> Qeydiyyatdan keçin.</Typography>
                        </Typography>
                        <Box
                            mt={2}
                            sx={{
                                position: 'relative',
                                '& fieldset': {
                                    borderRadius: "50px !important",
                                    borderColor: 'primary.dark',
                                },
                                '& input': {
                                    backgroundColor: 'white',
                                    borderRadius: "50px",
                                },
                                '& input::placeholder': {
                                    color: 'black'
                                }
                            }}
                        >
                            <TextField
                                fullWidth
                                placeholder="Email"
                                InputProps={{
                                    endAdornment: (
                                        <IconButton sx={{
                                            bgcolor: 'secondary.main',
                                            color: 'white',
                                            width: '80px',
                                            height: "55px",
                                            position: "absolute",
                                            zIndex: 2,
                                            borderRadius: "50px",
                                            right: "1px",
                                            '&:hover': {
                                                backgroundColor: 'secondary.dark'
                                            }
                                        }} >
                                            <EastIcon />
                                        </IconButton>
                                    )
                                }}

                            />
                        </Box>
                    </Box>
                </Stack>
                <Divider sx={{ my: 3, backgroundColor: '#E5E5E5' }} />
                <Stack direction="row" justifyContent="space-between">
                    <Typography>© 2022 BakuDevs.net. Bütün hüquqlar qorunur</Typography>
                    <Typography>Site by <Typography component="a" href="https://jedacademy.az" fontWeight={600} >JED Academy</Typography></Typography>
                </Stack>
            </Container>
        </Box >
    )
}
export default Footer
