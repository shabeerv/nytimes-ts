import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import en from "../../localization/en";
import { styles } from "./styles";

const Header = () => {
  return (
    <Box sx={styles.box}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          The New York Times
        </Typography>

        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          paragraph
        >
          {en.aboutNY}
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
