import { Box, Typography } from "@mui/material";
import contactHeader from 'assets/contact-header.png'


const Banner = ({ bannerName }: { bannerName: String; }) => {
    return (
        <Box sx={{
            background: `url("${contactHeader}") center no-repeat`,
            backgroundSize: 'cover',
            position: 'relative',
            height: "150px",
            zIndex: 5,
            color: "white",
            padding: 4,
            '&::before': {
                content: '""',
                position: 'absolute',
                inset: 0,
                zIndex: -1,
                backgroundColor: 'rgba(0, 141 , 150, 0.7)',
            }

        }}>
            <Typography textAlign='center' variant="h4" >{bannerName}</Typography>
            <Typography textAlign='center'>Əsas səhifə <span style={{
                display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'white', position: 'relative',
            }} ></span> {bannerName}  </Typography>
        </Box>
    )
}

export default Banner;
