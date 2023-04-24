import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#008D96',
            dark: '#05757d'
        },
        secondary: {
            main: '#F5AF15',
            dark: "#d59202"
        },
        grey: {
            50: '#fafdfd'
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none'
                }
            }
        }
    }
})

export default theme;
