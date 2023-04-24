import { Box, Stack, TextField, Typography } from "@mui/material"
import PillButton from "components/PillButton"

const Profile = () => {
    return (
        <Stack flexDirection='row' gap={5} paddingLeft={9} paddingTop={9} sx={{
            flexWrap: { xs: 'wrap', sm: 'no-wrap' },
            justifyContent: 'center',
            '& input': { width: '300px' },
            '& p': { color: '#3b403f' }
        }} >
            <Box sx={{
                display: "flex",
                flexDirection: 'column',
                gap: 2
            }}>
                <Typography fontSize={18} fontWeight={600}>Adınız və Soyadınız</Typography>
                <TextField variant="outlined" />
                <Typography fontSize={18} fontWeight={600}>E-mail</Typography>
                <TextField type="gmail" variant="outlined" />
                <PillButton txt="Yadda saxla" sx={{ my: 5, display: { xs: 'none', lg: 'block' } }} />
            </Box>

            <Box sx={{
                display: "flex",
                flexDirection: 'column',
                gap: 2
            }}>
                <Typography fontSize={18} fontWeight={600}>Mövcud şifrə</Typography>
                <TextField type="password" variant="outlined" />
                <Typography fontSize={18} fontWeight={600}>Yeni şifrə</Typography>
                <TextField type="password" variant="outlined" />
                <Typography fontSize={18} fontWeight={600}>Yeni şifrənin təkrarı</Typography>
                <TextField type="password" variant="outlined" />
                <PillButton txt="Yadda saxla" sx={{ my: 5, display: { xs: 'block', lg: 'none' } }} />
            </Box>
        </Stack>
    )
}
export default Profile
