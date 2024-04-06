import { Box, Container } from "@mui/material";
import { footerTitles } from "../../utils/constants";
import { GitHub } from "@mui/icons-material";
const Footer = () => {
    return (
        <Container>

            <Box>
                {footerTitles[0].map((title, index) => {
                    return <span key={`title-${index}`}>{title}</span>;

                })}
            </Box>


            <Box>
                <GitHub />
            </Box>

            <Box>
                {footerTitles[1].map((title, index) => {

                    return <span key={`title-${index}`}>{title}</span>;

                })}
            </Box>


        </Container >
    );
};

export default Footer;
