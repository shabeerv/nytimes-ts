import Grid from "@mui/material/Grid";
import { topStoriesSelector } from "../../selectors/newsSelector";
import { useAppSelector } from "../../hooks/useAppSelector";
import CustomCard from "../common/CustomCard";
import { nytimesLogo } from "../../helpers/constants";

const TopStories = () => {
  const topStories = useAppSelector(topStoriesSelector);

  return (
    <Grid container spacing={4}>
      {topStories.map((topStory, index) => (
        <Grid item key={topStory.uri} xs={12} sm={6} md={4}>
          <CustomCard
            title={topStory?.title}
            byline={topStory?.byline}
            imageURL={
              topStory?.multimedia?.length > 0
                ? topStory?.multimedia[0]?.url
                : nytimesLogo
            }
            abstract={topStory?.abstract}
            section={topStory?.section}
            published_date={topStory?.published_date}
            index={index}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default TopStories;
