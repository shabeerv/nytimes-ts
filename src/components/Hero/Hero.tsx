import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { getTopStories } from "../../actions/newsAction";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import Header from "../Header";
import TopStories from "../TopStories";

const Hero = () => {
  const dispatch = useAppDispatch();
  const [alignment, setAlignment] = useState("world");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  const toggleButtons = {
    world: "world",
    science: "science",
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
            {Object.keys(toggleButtons).map((key, i) => {
              return (
                <ToggleButton key={key} value={key}>
                  {key}
                </ToggleButton>
              );
            })}
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
            {alignment}
          </Typography>
          <TopStories />
        </Container>
      </main>
    </div>
  );
};

export default Hero;
