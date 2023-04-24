import { Alert, Snackbar } from "@mui/material"
import { createContext, useState } from "react"

type AlertSeverity = 'error'
    | 'info'
    | 'success'
    | 'warning'
interface AlertType {
    message: string,
    type: AlertSeverity
}
interface Props {
    children: React.ReactNode
}
export const ToastContext = createContext<(a: AlertType) => void>(() => { })

const ToastNotification = ({ children }: Props) => {
    const [open, setOpen] = useState(false)
    const [toast, setToast] = useState<AlertType>({ message: '', type: 'success' })

    const handleClose = () => {
        setOpen(false)
    }

    const toastNotify = (msg: AlertType) => {
        setToast(msg)
        setOpen(true)
    }


    return (
        <ToastContext.Provider value={toastNotify}>
            <Snackbar
                open={open}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                autoHideDuration={1000}
                onClose={handleClose}>
                <Alert onClose={handleClose} severity={toast.type} sx={{ width: '100%' }}>
                    {toast.message}
                </Alert>
            </Snackbar>
            {children}
        </ToastContext.Provider>
    )
}
export default ToastNotification
