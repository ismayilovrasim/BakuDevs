import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Button, Container } from '@mui/material';
import { AppBar, Toolbar } from "@mui/material"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { ReactComponent as FullLogo } from 'assets/FullLogo.svg'
import { ReactComponent as JamMenu } from 'assets/jam_menu.svg'
import LoginIcon from '@mui/icons-material/Login';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { grey } from '@mui/material/colors';
import HeaderMenu from 'components/HeaderMenu';


const Header = () => {
    return (
        <AppBar position="sticky" sx={{
            backgroundColor: grey[50],
            maxHeight: 65
        }}>
            <Toolbar>
                <Container maxWidth="lg"
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: 3,
                        mx: 'auto',
                        p: { md: 0 }
                    }}
                >
                    <Typography
                        component="a"
                        href="/"
                        sx={{
                            width: 160
                        }}>
                        <FullLogo style={{ width: '100%' }} />
                    </Typography>
                    <HeaderMenu>
                        <Stack direction="row" gap={0.25} alignItems="center">
                            <JamMenu style={{ width: 25 }} />
                            <Typography color="black">Kurslar</Typography>
                        </Stack>
                    </HeaderMenu>
                    <Typography
                        component="a"
                        href="/dashboard"
                        sx={{
                            display: 'flex',
                            direction: "row",
                            gap: 0.25,
                            alignItems: "center",
                            textDecoration: 'none'
                        }}>
                        <FavoriteBorderIcon color='primary' />
                        <Typography color="primary">İstək siyahısı</Typography>
                    </Typography>
                    <Stack direction="row" gap={1.25} alignItems="center" sx={{
                        '&>button': {
                            borderRadius: 20,
                            boxShadow: 'none'
                        }
                    }}>
                        <Button
                            variant='outlined'
                            startIcon={<LoginIcon style={{ fontSize: 16 }} />}
                            href="sign-in"
                            sx={{
                                borderRadius: 20
                            }}
                        >
                            Daxil ol
                        </Button>
                        <Button
                            variant='contained'
                            startIcon={<BorderColorIcon style={{ fontSize: 16 }} />}
                        >Qeydiyyatdan kec</Button>
                    </Stack>
                </Container>
            </Toolbar>
        </AppBar>
    )
}
export default Header
