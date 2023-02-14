import Container from "@mui/material/Container";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { getTopStories } from "../../actions/newsAction";
import { useState } from "react";
import TopStories from "./TopStories";
import { styles } from "./styles";
import CategoriesButton from "./CategoriesButton/CategoriesButton";
import strings from "../../localization";
import Text from "../common/Text";

const Articles = () => {
  const dispatch = useAppDispatch();
  const [alignment, setAlignment] = useState(strings.world);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  useEffect(() => {
    dispatch(getTopStories(alignment));
  }, [alignment, dispatch]);

  return (
    <>
      <CategoriesButton value={alignment} onChange={handleChange} />

      <Container sx={styles.container} maxWidth="xl">
        <Text variant="h4" align="center" sx={styles.typography} gutterBottom>
          {alignment}
        </Text>
        <TopStories />
      </Container>
    </>
  );
};

export default Articles;
