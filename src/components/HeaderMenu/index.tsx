import React, { useState } from "react"
import { Box, Divider, IconButton, Stack, Typography } from '@mui/material'
import menuImg from "assets/headerbg.png"
import CloseIcon from '@mui/icons-material/Close';

interface Props {
    children: React.ReactNode;
}
const HeaderMenu = ({ children }: Props) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeTab, setActiveTab] = useState(0)
    return (
        <>
            <div onClick={() => {
                setMenuOpen(true)
            }}>
                {children}
            </div>
            {
                menuOpen && <Box sx={{
                    position: 'fixed',
                    inset: 0,
                    background: `url("${menuImg}") white`,
                    backgroundSize: 'cover',
                    zIndex: 100,
                    color: "black",
                    paddingTop: { xs: 0, md: '100px' },
                    paddingLeft: { xs: 0, md: '100px' }
                }}>
                    <Stack direction={{ xs: "column", md: 'row' }} gap={{ xs: 0, md: 5 }} flexWrap="wrap">
                        <Box
                            sx={{
                                paddingLeft: '30px',
                                '& p': {
                                    fontSize: { xs: 48, md: 64 },
                                    fontWeight: 600,
                                    WebkitTextStrokeWidth: 1,
                                    WebkitTextStrokeColor: 'black',
                                    cursor: 'pointer',
                                },
                                '& .verticalDivider': {
                                    visibility: { xs: 'hidden', md: 'visible' }
                                },
                                '& .horizontalDivider': {
                                    visibility: { xs: 'visible', md: 'hidden' },
                                    height: 2,
                                    width: "60%"
                                }
                            }}
                        >
                            <Box sx={{ textAlign: 'right', position: 'relative', top: "-50px" }}>
                                <IconButton onClick={() => {
                                    setMenuOpen(false)
                                }}>
                                    <CloseIcon />
                                </IconButton>
                            </Box>
                            <Typography
                                onClick={() => { setActiveTab(0) }}
                                sx={{
                                    color: activeTab === 0 ? 'black' : 'transparent',

                                }}
                            >Frontend</Typography>
                            <Typography
                                onClick={() => { setActiveTab(1) }}
                                sx={{
                                    color: activeTab === 1 ? 'black' : 'transparent',
                                }}
                            >Backend</Typography>
                            <Typography
                                onClick={() => { setActiveTab(2) }}
                                sx={{
                                    color: activeTab === 2 ? 'black' : 'transparent',
                                }}
                            >UI/UX</Typography>
                        </Box>
                        <Divider flexItem className="horizontalDivider" />
                        <Stack gap={4} marginTop={{ xs: 1, md: 7 }} direction="row" maxHeight={200} fontSize={24}
                        >
                            <Divider flexItem className="verticalDivider" orientation="vertical" sx={{ textAlign: "center", marginTop: { xs: 1, md: 5 } }} />
                            {activeTab === 0 &&
                                <div>
                                    <p> HTML</p>
                                    <p> CSS</p>
                                    <p> Bootstrap</p>
                                    <p> Javascript</p>
                                    <p> JQuery</p>
                                    <p> React.JS</p>
                                </div>
                            }
                            {activeTab === 1 &&
                                <div>
                                    <p> nodejs</p>
                                    <p> express</p>
                                    <p> mongo</p>
                                </div>
                            }
                            {activeTab === 2 &&
                                <div>
                                    <p> figma</p>
                                    <p> psd</p>
                                    <p> adobe</p>
                                </div>
                            }
                        </Stack>
                    </Stack>
                </Box>
            }
        </>
    )
}
export default HeaderMenu
