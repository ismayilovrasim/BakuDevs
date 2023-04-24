import { Box } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";
import Banner from "./Banner";

interface Props {
    children: React.ReactNode;
    bannerName?: String;
    bannerUrl?: String;
}
const PageContainer = ({ children, bannerName = "" }: Props) => {
    return (
        <Box>
            <Header />
            {
                bannerName && <Banner bannerName={bannerName} />
            }
            <Box component="main">
                {children}
            </Box>
            <Footer />
        </Box>
    )
}
export default PageContainer;
