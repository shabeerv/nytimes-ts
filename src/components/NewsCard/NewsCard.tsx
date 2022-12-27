import Grid from "@mui/material/Grid";
import { getNews } from "../../selectors/newsSelector";
import { useAppSelector } from "../../hooks/useAppSelector";
import CustomCard from "../common/CustomCard";

const NewsCard = () => {
  const topStories = useAppSelector(getNews);

  return (
    <Grid container spacing={4}>
      {topStories.map((topStory) => (
        <Grid item key={topStory.uri} xs={12} sm={6} md={4}>
          <CustomCard
            title={topStory?.title}
            byline={topStory?.byline}
            // imageURL={
            //   topStory?.multimedia[0]?.url
            //     ? `https://static01.nyt.com/${topStory?.multimedia[0]?.url}`
            //     : "https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg"
            // }
            imageURL={
              topStory?.multimedia?.length > 0
                ? topStory?.multimedia[0]?.url
                : "https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg"
            }
            abstract={topStory?.abstract}
            section={topStory?.section}
            published_date={topStory?.published_date}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default NewsCard;
