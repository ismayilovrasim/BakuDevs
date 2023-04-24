import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import PillButton from "components/PillButton";
import { Stack, Typography } from '@mui/material';
import { useFormik } from 'formik';
import axios from 'axios';

const url = `http://192.168.0.142:5050/contacts`
const ContactArea = () => {
    const formik = useFormik({
        initialValues: {
            fullname: "",
            email: "",
            phone: "",
            message: ''
        },
        onSubmit: async (values) => {
            await axios.post(url, values)
            alert('sizinle elaqe saxlanilacaq!')
            formik.handleReset({})
        }
    })
    return (
        <>
            <Container maxWidth="lg" sx={{
                py: 4,
                textAlign: 'center'
            }} >
                <Typography variant="h3" fontWeight={700} >Suallarınız var?</Typography>
                <Typography sx={{
                    color: 'gray',
                    fontSize: '24px'
                }} mt={2} mb={3}  >Formu doldurun. Yaxın zamanda sizinlə əlaqə saxlayacağıq.</Typography>

                <Stack flexDirection='row' flexWrap='wrap' textAlign='center' justifyContent='center' p={3} gap={1} >
                    <Stack sx={{
                        gap: 3,
                        width: '400px',
                        '& .input_elem': {
                            backgroundColor: '#F6F6F7',
                            border: 'none'
                        }

                    }}>
                        <TextField
                            onChange={formik.handleChange}
                            value={formik.values.fullname}
                            name='fullname' className="input_elem" fullWidth label="Adınız və Soyadınız" variant="outlined" />
                        <TextField
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            name='email' className="input_elem" fullWidth label="Email ünvanı" variant="outlined" />
                        <TextField
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                            name='phone' className="input_elem" fullWidth label="Əlaqə nömrəsi" variant="outlined" />
                    </Stack>
                    <Stack sx={{
                        width: '400px',
                        padding: 0
                    }}>
                        <TextField
                            label="Mesajınız"
                            multiline
                            rows={8}
                            onChange={formik.handleChange}
                            value={formik.values.message}
                            name="message"
                            variant="outlined"
                            sx={{
                                backgroundColor: '#F6F6F7',
                                border: 'none',
                                borderRadius: '8px',

                            }}
                        />
                    </Stack>
                </Stack>
                <PillButton onClick={formik.handleSubmit} txt="Göndər" sx={{ my: 5 }} />
            </Container>
        </>
    )
}

export default ContactArea;
