import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { getTopStories } from "../../actions/newsAction";
import { useState } from "react";
import TopStories from "./TopStories";
import en from "../../localization/en";
import { styles } from "./styles";
import CategoriesButton from "./CategoriesButton/CategoriesButton";

const Articles = () => {
  const dispatch = useAppDispatch();
  const [alignment, setAlignment] = useState(en.world);

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
        <Typography
          component="h4"
          variant="h4"
          align="center"
          sx={styles.typography}
          gutterBottom
        >
          {alignment}
        </Typography>
        <TopStories />
      </Container>
    </>
  );
};

export default Articles;
