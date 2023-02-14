import Grid from "@mui/material/Grid";
import { topStoriesSelector } from "../../../selectors/newsSelector";
import { useAppSelector } from "../../../hooks/useAppSelector";
import CustomCard from "../../common/CustomCard";
import { nytimesLogo } from "../../../helpers/constants";

const TopStories = () => {
  const topStories = useAppSelector(topStoriesSelector);

  return (
    <Grid container spacing={4}>
      {topStories?.map((article, index) => (
        <Grid item key={article?.uri} xs={12} sm={6} md={4}>
          <CustomCard
            title={article?.title}
            byline={article?.byline}
            imageURL={
              article?.multimedia?.length > 0
                ? article?.multimedia[0]?.url
                : nytimesLogo
            }
            abstract={article?.abstract}
            section={article?.section}
            published_date={article?.published_date}
            index={index}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default TopStories;
