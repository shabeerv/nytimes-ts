import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { getTopStories } from "../../actions/newsAction";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import NewsCard from "../NewsCard";
import Header from "../Header";

const Hero = () => {
  const dispatch = useAppDispatch();
  const [isWorldNews, setIsWorldNews] = useState(true);
  const [alignment, setAlignment] = useState("world");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  const onWorldClickHandler = () => {
    setIsWorldNews(true);
    dispatch(getTopStories("world"));
  };

  const onScienceClickHandler = () => {
    setIsWorldNews(false);
    dispatch(getTopStories("science"));
  };

  useEffect(() => {
    dispatch(getTopStories(alignment));
  }, [alignment, dispatch]);

  return (
    <div>
      <main>
        <Header />
        <Stack direction="row" spacing={2} justifyContent="center">
          <ToggleButtonGroup
            color="info"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton onClick={onWorldClickHandler} value="world">
              World
            </ToggleButton>
            <ToggleButton onClick={onScienceClickHandler} value="science">
              Science
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <Container sx={{ py: 8 }} maxWidth="xl">
          <Typography
            component="h4"
            variant="h4"
            align="center"
            sx={{ pb: 2 }}
            gutterBottom
          >
            {isWorldNews ? "World" : "Science"}
          </Typography>
          <NewsCard />
        </Container>
      </main>
    </div>
  );
};

export default Hero;
