import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import PillButton from "components/PillButton"
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';


const Subscribe = ({ }) => {
    return (
        <Stack flexDirection='row' p={4} gap={5} flexWrap='wrap' sx={{
            '& p': {
                fontSize: '20px',
                fontWeight: '600px'
            }
        }}>
            <Box>
                <Box sx={{
                    width: '340px',
                    height: '64px',
                    bgcolor: '#FFF8F8',
                    border: '1px solid #C89F9F',
                    borderRadius: '6px',
                    mb: 4
                }}>
                    <Typography sx={{ color: '#C89F9F', paddingTop: 2, paddingLeft: 2 }}>Siz abunə deyilsiniz.</Typography>
                </Box>
                <Typography color="gray" sx={{ position: 'relative', marginLeft: 2 }} ><ErrorOutlineIcon sx={{ position: 'absolute', top: 2, left: -25 }} /> Aylıq abunə haqqı 10 AZN təşkil edir.</Typography>
                <PillButton txt="Abunə ol" sx={{ my: 5 }} />
            </Box>
            <Box>
                <Typography color="gray" sx={{ position: 'relative', marginLeft: 2 }}> <ErrorOutlineIcon sx={{ position: 'absolute', top: 2, left: -25 }} />Sizin abunəliyiniz mövcuddur.</Typography>
                <Typography color={"#C89F9F"} sx={{ position: 'relative', marginLeft: 2 }} ><WarningAmberIcon sx={{ position: 'absolute', top: 2, left: -24 }} />15.03.2022 tarixində abunəliyiniz bitir.</Typography>
                <PillButton txt="Yenilə" sx={{ my: 5 }} />
            </Box>
        </Stack>
    )
}
export default Subscribe
