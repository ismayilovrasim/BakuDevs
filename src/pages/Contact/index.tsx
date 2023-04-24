import Box from "@mui/material/Box";
import PageContainer from "components/PageContainer";
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import { Stack } from "@mui/system";
import { Container, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ShareIcon from '@mui/icons-material/Share';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import contactHeader from "assets/contact-header.png"
import ContactArea from "components/ContactArea";

const Contact = () => {
    return (
        <PageContainer bannerName="Əlaqə" bannerUrl={contactHeader}>
            <Container maxWidth="lg">
                <Stack flexDirection='row' flexWrap='wrap' justifyContent='center' sx={{ gap: 2, paddingBottom: '74px' }} >
                    <Box sx={{ display: 'flex' }} >
                        <Box sx={{
                            height: '254px',
                            width: '271px',

                            marginTop: '74px',

                            border: '1px solid #F4D2B8',
                            borderRadius: '30px',
                            bgcolor: '#F9F5EE',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            paddingTop: 4



                        }}>
                            <Box sx={{
                                width: '60px',
                                height: '60px',
                                textAlign: 'center',
                                boxShadow: 9,
                                marginLeft: 12.9,
                                borderRadius: '18px',
                                bgcolor: 'orange'
                            }} >
                                <WifiCalling3Icon sx={{
                                    color: 'white',
                                    height: '100%',
                                    textAlign: 'center',
                                }} />
                            </Box>

                            <Typography sx={{ textAlign: 'center', fontSize: '20px', fontWeight: 700 }}>Telefon</Typography>
                            <Typography sx={{ textAlign: 'center', color: 'gray' }}>+994 55 555 55 55</Typography>
                            <Typography sx={{ textAlign: 'center', color: 'gray' }}>+994 55 555 55 55</Typography>
                        </Box>

                    </Box>
                    <Box sx={{ display: 'flex' }} >
                        <Box sx={{
                            height: '254px',
                            width: '271px',

                            marginTop: '74px',
                            border: '1px solid #F4D2B8',
                            borderRadius: '30px',
                            bgcolor: '#F9F5EE',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            paddingTop: 4



                        }}>
                            <Box sx={{
                                width: '60px',
                                height: '60px',
                                textAlign: 'center',
                                boxShadow: 9,
                                marginLeft: 12.9,
                                borderRadius: '18px',
                                bgcolor: 'orange'
                            }} >
                                <EmailIcon sx={{
                                    color: 'white',
                                    height: '100%',
                                    textAlign: 'center',
                                }} />
                            </Box>

                            <Typography sx={{ textAlign: 'center', fontSize: '20px', fontWeight: 700 }}>Email</Typography>
                            <Typography sx={{ textAlign: 'center', color: 'gray' }}>info@bakudevs.net</Typography>

                        </Box>

                    </Box>
                    <Box sx={{ display: 'flex' }} >
                        <Box sx={{
                            height: '254px',
                            width: '271px',

                            marginTop: '74px',
                            border: '1px solid #F4D2B8',
                            borderRadius: '30px',
                            bgcolor: '#F9F5EE',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            paddingTop: 4



                        }}>
                            <Box sx={{
                                width: '60px',
                                height: '60px',
                                textAlign: 'center',
                                boxShadow: 9,
                                marginLeft: 12.9,
                                borderRadius: '18px',
                                bgcolor: 'orange'
                            }} >
                                <WhatsAppIcon sx={{
                                    color: 'white',
                                    height: '100%',
                                    textAlign: 'center',
                                }} />
                            </Box>

                            <Typography sx={{ textAlign: 'center', fontSize: '20px', fontWeight: 700 }}>WhatsApp</Typography>
                            <Typography sx={{ textAlign: 'center', color: 'gray' }}>+994 55 555 55 55</Typography>

                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex' }} >
                        <Box sx={{
                            height: '254px',
                            width: '271px',

                            marginTop: '74px',
                            border: '1px solid #F4D2B8',
                            borderRadius: '30px',
                            bgcolor: '#F9F5EE',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            paddingTop: 4



                        }}>
                            <Box sx={{
                                width: '60px',
                                height: '60px',
                                textAlign: 'center',
                                boxShadow: 9,
                                marginLeft: 12.9,
                                borderRadius: '18px',
                                bgcolor: 'orange'
                            }} >
                                <ShareIcon sx={{
                                    color: 'white',
                                    height: '100%',
                                    textAlign: 'center',
                                }} />
                            </Box>

                            <Typography sx={{ textAlign: 'center', fontSize: '20px', fontWeight: 700 }}>Sosial şəbəkələr</Typography>
                            <Stack flexDirection='row' flexWrap='wrap' justifyContent='center' sx={{ gap: 2, }}>

                                <Box sx={{
                                    width: 36,
                                    height: 36,
                                    border: '1px solid gray',
                                    paddingTop: 0.6,
                                    borderRadius: 1,
                                    display: "flex",
                                    justifyContent: "center",
                                }}><FacebookIcon sx={{
                                    color: 'gray',

                                }} /></Box>
                                <Box sx={{
                                    width: 36,
                                    height: 36,
                                    border: '1px solid gray',
                                    paddingTop: 0.6,
                                    borderRadius: 1,
                                    display: "flex",
                                    justifyContent: "center",
                                }}><WhatsAppIcon sx={{
                                    color: 'gray',

                                }} /></Box>
                                <Box sx={{
                                    width: 36,
                                    height: 36,
                                    border: '1px solid gray',
                                    paddingTop: 0.6,
                                    borderRadius: 1,
                                    display: "flex",
                                    justifyContent: "center",
                                }}><InstagramIcon sx={{
                                    color: 'gray',

                                }} /></Box>
                                <Box sx={{
                                    width: 36,
                                    height: 36,
                                    border: '1px solid gray',
                                    paddingTop: 0.6,
                                    borderRadius: 1,
                                    display: "flex",
                                    justifyContent: "center",
                                }}><TelegramIcon sx={{
                                    color: 'gray',

                                }} /></Box>
                            </Stack>
                        </Box>
                    </Box>
                </Stack>
            </Container>
            <Box sx={{
                backgroundColor: '#E3F1F2',

            }} >
                <ContactArea />
            </Box>
        </PageContainer>
    )
}
export default Contact;
