import { useEffect, useState, FC } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { topStoriesSelector } from "../../../selectors/newsSelector";
import { nytimesLogo, path } from "../../../helpers/constants";
import Container from "@mui/material/Container";
import moment from "moment";
import CardActions from "@mui/material/CardActions";
import Link from "@mui/material/Link";
import CustomButton from "../../common/CustomButton";
import Comments from "../Comments";
import { styles } from "./styles";
import strings from "../../../localization";
import Text from "../../common/Text";
import { INews } from "../../../helpers/models";

type Props = {
  id: any;
};

const ArticleDetail: FC = () => {
  const [article, setArticle] = useState<INews>();
  const { id } = useParams<Props>();
  const navigate = useNavigate();
  const topStories = useAppSelector(topStoriesSelector);

  const validateId = () => {
    if (topStories?.length > 0 && id <= topStories?.length && id >= 0) {
      return true;
    } else {
      navigate(path.HOME);
    }
  };

  useEffect(() => {
    let isValid = validateId();
    if (isValid) {
      setArticle(topStories[id]);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div style={styles.div}>
      <Container maxWidth="lg">
        <Text variant="caption">
          {article?.section?.toUpperCase()} -{" "}
          {article?.subsection?.toUpperCase()} {" | "}
          {article?.published_date
            ? moment(article?.published_date).format("LLL")
            : strings.notAvailable}{" "}
          {strings.updated_on}{" "}
          {article?.updated_date
            ? moment(article?.updated_date).format("LLL")
            : strings.notAvailable}
        </Text>

        <Text sx={styles.articleTitle} variant="h2" gutterBottom>
          {article?.title}
        </Text>

        <Text variant="h6" gutterBottom>
          {article?.byline}
        </Text>

        <Card>
          <CardMedia
            component="img"
            src={
              article?.multimedia ? article?.multimedia[0]?.url : nytimesLogo
            }
            alt="news-img"
          />

          <CardContent sx={styles.cardContent}>
            <Text variant="h3" gutterBottom>
              {article?.multimedia[0]?.caption &&
                article?.multimedia[0]?.caption}
            </Text>

            <Text variant="body1" paragraph>
              {article?.abstract}
            </Text>
          </CardContent>

          <CardActions>
            <Link href={path.HOME} underline="none">
              <CustomButton variant="contained" size="small">
                {strings.back}
              </CustomButton>
            </Link>

            <Link href={article?.url} underline="none">
              <CustomButton variant="contained" size="small">
                {strings.source}
              </CustomButton>
            </Link>
          </CardActions>
        </Card>

        <Comments />
      </Container>
    </div>
  );
};

export default ArticleDetail;
