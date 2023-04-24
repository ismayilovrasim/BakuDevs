import CloseIcon from '@mui/icons-material/Close';
import { Alert, Box, Divider, IconButton, Snackbar, Typography } from '@mui/material';
import { ToastContext } from 'context/ToastNotification/ToastNotification';
import { useContext } from 'react';

interface Props {
    row: any;
    setRow: any;
}

const ReseptMenu = ({ row, setRow }: Props) => {
    const toastNotify = useContext(ToastContext)
    return (
        <>
            <Box sx={{
                position: 'fixed',
                inset: 0,
                backgroundSize: 'cover',
                backgroundColor: 'rgba(139,139,139,0.5)',
                zIndex: 100,
                color: "black",
            }}>
                <Box sx={{ position: 'relative' }}>
                    <Box sx={{
                        width: '100%',
                        maxWidth: 550,
                        minHeight: 440,
                        bgcolor: 'white',
                        borderRadius: 10,
                        top: `calc(50vh - 220px )`,
                        left: `calc(50vw -  275px )`,
                        position: 'absolute',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        display: 'flex',
                        gap: 4,
                        padding: 10,
                        '& p': {
                            fontWeight: 500,
                            fontSize: 20,

                        }
                    }}> <Box sx={{ textAlign: 'center', position: 'relative' }}>
                            <IconButton sx={{ position: 'absolute', top: -60, right: -30 }} onClick={() => {
                                setRow({})
                            }}>
                                <CloseIcon />
                            </IconButton>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography>Qəbz ID:</Typography>
                            <Typography
                                onClick={() => {
                                    navigator.clipboard.writeText(row.id)
                                    toastNotify({ message: 'Kopyalandi', type: 'success' })
                                }}
                            >{row.id}</Typography></Box>
                        <Divider></Divider>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography>Abunə tarixi:</Typography>
                            <Typography>{row.date}</Typography></Box>
                        <Divider></Divider>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography>Məbləğ:</Typography>
                            <Typography>{row.amount}</Typography></Box>
                    </Box>
                </Box>
            </Box >
        </>)
}
export default ReseptMenu;
