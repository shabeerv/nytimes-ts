import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Text from "../common/Text";
import strings from "../../localization";
import { styles } from "./styles";

const Header = () => {
  return (
    <Box sx={styles.box}>
      <Container maxWidth="sm">
        <Text variant="h3" align="center" color="text.primary" gutterBottom>
          {strings.headingNY}
        </Text>

        <Text variant="h6" align="center" color="text.secondary" paragraph>
          {strings.aboutNY}
        </Text>
      </Container>
    </Box>
  );
};

export default Header;
