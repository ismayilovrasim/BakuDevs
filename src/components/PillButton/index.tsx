import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { SxProps, Theme } from '@mui/material/styles';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


interface Props {
    txt: string;
    sx?: SxProps<Theme> | undefined;
    withChevron?: boolean;
    btnHref?: string;
    onClick?: (e: any) => void;
}

const PillButton = ({ txt, sx, withChevron = true, btnHref, onClick }: Props) => {
    return (
        <Box
            sx={{
                width: 'fit-content',
                mx: 'auto',
                '& > button': {
                    borderRadius: 5,
                    boxShadow: 'none',
                    py: 1,
                    px: 4
                },
                ...sx
            }}
        >
            <Button
                onClick={onClick}
                href={btnHref}
                sx={{
                    '& svg': {
                        position: 'relative',
                        left: 0,
                        transition: 'all 100ms linear'
                    },
                    '&:hover': {
                        '& svg': {
                            left: 10,
                            transform: 'scale(1.25)'
                        }
                    }
                }}
                endIcon={withChevron && <ChevronRightIcon />}
                variant='contained'
            >{txt}</Button>
        </Box>
    )
}
export default PillButton
