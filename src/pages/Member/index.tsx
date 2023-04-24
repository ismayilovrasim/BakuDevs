import { Typography } from "@mui/material"
import Container from "@mui/material/Container"
import { Box, Stack } from "@mui/material"
import Lists from "components/Member/Lists"
import Profile from "components/Member/Profile"
import Resept from "components/Member/Resept"
import Subscribe from "components/Member/Subscribe"
import PageContainer from "components/PageContainer"
import { useState } from "react"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import QueueIcon from '@mui/icons-material/Queue';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import shadows from "@mui/material/styles/shadows"

const menuItems = [
    {
        id: 0,
        itemName: 'Profil',
        icon: <PermIdentityIcon />,
    },
    {
        id: 1,
        itemName: 'Abunelik',
        icon: <QueueIcon />
    },
    {
        id: 2,
        itemName: 'Qebzler',
        icon: <FeedOutlinedIcon />
    },
    {
        id: 3,
        itemName: 'Istek siyahisi',
        icon: <FavoriteBorderOutlinedIcon />
    },
    {
        id: 4,
        itemName: 'Cixis',
        icon: <ExitToAppOutlinedIcon />
    },
]

const MenuItem = ({ onClick, itemName, ItemIcon, isActive = false }: any) => {
    return (<Typography sx={(theme) => ({
        fontSize: '25px',
        fontWeight: 700,
        p: 2,
        borderLeft: `5px solid ${isActive ? theme.palette.primary.main : 'transparent'}`,
        color: 'gray',
        '&:hover': {
            color: 'primary.main',
            borderLeft: '5px solid'
        }
    })}
        onClick={onClick}>{ItemIcon} {itemName}</Typography>
    )
}

const Member = () => {
    const [activeTab, setActiveTab] = useState(0)
    return (
        <PageContainer>
            <Container maxWidth="lg" sx={{ py: 9 }} >
                <Stack direction={{ xs: 'column', lg: 'row' }} alignItems={{ xs: "center", lg: 'stretch' }}>
                    <Box sx={{
                        width: "300px",
                        height: "490px",
                        boxShadow: shadows[10],
                        borderRadius: '20px',
                        display: 'flex',
                        textAlign: "center",
                        flexDirection: 'column',
                    }}>
                        <Typography sx={{
                            borderRadius: '20px 20px 0 0 ',
                            bgcolor: 'primary.main',
                            fontWeight: 700,
                            fontSize: '25px',
                            color: 'white',
                            height: '20%',
                            padding: 4,
                        }}>Şəxsi kabinet</Typography>
                        <Box sx={{
                            py: 3,
                            '& p:hover': {
                                boxShadow: shadows[3],
                            },
                            '& p': {
                                paddingLeft: 8,
                                cursor: 'pointer',
                                textAlign: 'start'
                            },
                            '& svg': {
                                position: 'relative',
                                top: 4
                            }
                        }} >
                            {
                                menuItems.map(({ id, icon, itemName }) => <MenuItem
                                    key={id}
                                    isActive={activeTab === id}
                                    onClick={() => {
                                        if (id === 4) {
                                            alert('cixmaq isteyirsen?')
                                        } else {
                                            setActiveTab(id)
                                        }
                                    }}
                                    itemName={itemName}
                                    ItemIcon={icon}
                                />
                                )
                            }
                        </Box>
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        {activeTab === 0 && <Profile />}
                        {activeTab === 1 && <Subscribe />}
                        {activeTab === 2 && <Resept />}
                        {activeTab === 3 && <Lists />}
                    </Box>
                </Stack>
            </Container>
        </PageContainer >
    )
}
export default Member
