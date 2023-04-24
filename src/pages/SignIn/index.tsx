
import EmailIcon from '@mui/icons-material/Email'
import FacebookIcon from '@mui/icons-material/Facebook'
import GoogleIcon from '@mui/icons-material/Google'
import HttpsIcon from '@mui/icons-material/Https'
import { Box, Checkbox, Grid, InputAdornment, InputLabel, Paper, TextField, Typography } from "@mui/material"
import Link from '@mui/material/Link'
import { Container, Stack } from "@mui/system"
import Frame from 'assets/Frame.svg'
import Group from 'assets/Group.svg'
import Shape1 from 'assets/shape-1.svg'
import PageContainer from "components/PageContainer"
import PillButton from "components/PillButton"
// A: placeholder yoxdu
// A: checkbox label yoxdu
// A: responsive qaqas ucdu goye

const SignIn = () => {
    return (
        <PageContainer >
            <Box sx={{ backgroundColor: "#f5f5f5", py: 4 }}>
                <Container maxWidth="lg" sx={{ py: 4 }} >
                    <Grid container >
                        <Grid item sm={3} sx={{
                            position: "relative",
                            width: "100%",
                            textAlign: "center"
                        }}>
                            <Stack direction="row" justifyContent="space-between">
                                <Box sx={{
                                    position: "absolute",
                                    top: 0,
                                    right: 0,
                                }}>
                                    <img src={Shape1} alt="" />
                                </Box>
                                <Box sx={{
                                    position: "absolute",
                                    bottom: 0,
                                    right: 0
                                }}>
                                    <img src={Frame} alt="" />
                                </Box>
                            </Stack>
                        </Grid>
                        <Grid item sm={7} md={6} sx={{
                            width: "100%"
                        }}>
                            <Box>
                                <Paper sx={{ padding: "20px", maxWidth: 450, margin: "0 auto" }} >
                                    <Typography variant="h4" textAlign="center">
                                        Daxil Olun
                                    </Typography>
                                    <Box sx={{
                                        color: "black",
                                        fontWeight: 600,
                                        padding: '10px 0'
                                    }}>
                                        <TextField fullWidth
                                            sx={{
                                                '& input': {
                                                    paddingLeft: '40px'
                                                }
                                            }}
                                            InputProps={{
                                                startAdornment:
                                                    <Box
                                                        sx={{
                                                            position: 'absolute',
                                                            top: 0,
                                                            left: 0,
                                                            height: '100%',
                                                            width: 50,
                                                            backgroundColor: "#395185",
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            borderTopLeftRadius: 'inherit',
                                                            borderBottomLeftRadius: 'inherit'
                                                        }}
                                                    >
                                                        <FacebookIcon sx={{ color: 'white' }} />
                                                    </Box>
                                            }}
                                        />

                                    </Box>
                                    <Box sx={{
                                        color: "black",
                                        fontWeight: 600, padding: '10px 0'
                                    }}>
                                        <TextField fullWidth
                                            sx={{

                                                '& input': {
                                                    paddingLeft: '40px'
                                                }
                                            }}
                                            InputProps={{
                                                startAdornment:
                                                    <Box
                                                        sx={{
                                                            position: 'absolute',
                                                            top: 0,
                                                            left: 0,
                                                            height: '100%',
                                                            width: 50,
                                                            backgroundColor: " #E93E32",
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            borderTopLeftRadius: 'inherit',
                                                            borderBottomLeftRadius: 'inherit'
                                                        }}
                                                    >
                                                        <GoogleIcon sx={{ color: 'white' }} />
                                                    </Box>
                                            }}
                                        />

                                    </Box>
                                    <Box>
                                        <InputLabel sx={{
                                            color: "black",
                                            fontWeight: 600,
                                            padding: '10px 0'
                                        }}>
                                            Email
                                        </InputLabel>
                                        <TextField fullWidth
                                            placeholder="Email ünvanı"
                                            InputProps={{
                                                startAdornment:
                                                    <InputAdornment position="start">
                                                        <EmailIcon />
                                                    </InputAdornment>,
                                            }}

                                        />
                                    </Box>
                                    <Box sx={{ padding: "20px 0" }}>

                                        <InputLabel sx={{
                                            color: "black",
                                            fontWeight: 600,
                                            padding: '10px 0'
                                        }}>
                                            Şifrə
                                        </InputLabel>
                                        <TextField fullWidth
                                            placeholder="Şifrə"
                                            InputProps={{
                                                startAdornment:
                                                    <InputAdornment position="start">
                                                        <HttpsIcon />
                                                    </InputAdornment>,
                                            }}

                                        />
                                    </Box>
                                    <Stack direction={"row"} justifyContent="space-between" >
                                        <Box>
                                            <Checkbox />
                                        </Box>
                                        <Typography sx={{
                                            marginTop: '12px'
                                        }}>
                                            <Link href="#" underline="none" sx={{ color: "black" }}>
                                                Şifrənizi unutmusunuz?
                                            </Link>
                                        </Typography>
                                    </Stack>
                                    <Box sx={{ textAlign: "center", margin: "15px 0" }}>
                                        <PillButton txt="Daxil ol" />
                                    </Box>
                                    <Stack direction={'row'} justifyContent="center" gap={2}>
                                        <Link href="#" underline="none">
                                            Hesabınız yoxdur?
                                        </Link><Link href="#" underline="none">
                                            Qeydiyyatdan keçin
                                        </Link>
                                    </Stack>
                                </Paper>
                            </Box>                    </Grid>
                        <Grid item md={3} sm={2} sx={{

                            width: "100%",
                            position: "relative",
                            textAlign: "center"
                        }}>
                            <Box sx={{
                                marginTop: { xs: 10 },
                                position: { sm: "absolute" },
                                top: { sm: "20%" },
                            }}>
                                <img src={Group} alt="" />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </PageContainer >
    )
}



export default SignIn
