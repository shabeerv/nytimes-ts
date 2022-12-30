import { useParams, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "../../hooks/useAppSelector";
import { topStoriesSelector } from "../../selectors/newsSelector";
import { useEffect, useState } from "react";
import { nytimesLogo, path } from "../../helpers/constants";
import Container from "@mui/material/Container";
import moment from "moment";
import CardActions from "@mui/material/CardActions";
import Link from "@mui/material/Link";
import CustomButton from "../common/CustomButton";
import en from "../../localization/en";
import Comments from "../Comments";
import { styles } from "./styles";

type Props = {
  id: any;
};

const ArticleDetail: React.FC = () => {
  const [article, setArticle] = useState<any>({});
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
  }, []);
  return (
    <>
      <div style={styles.div}>
        <Container maxWidth="lg">
          <Typography component="h2" variant="caption">
            {article?.section?.toUpperCase()} -{" "}
            {article?.subsection?.toUpperCase()} {" | "}
            {article?.published_date
              ? moment(article?.published_date).format("LLL")
              : "N/A"}{" "}
            {en.nytimes.updated_on}{" "}
            {article?.updated_date
              ? moment(article?.updated_date).format("LLL")
              : "N/A"}
          </Typography>
          <Typography
            component="h1"
            style={{ justifyContent: "center", alignItems: "center" }}
            variant="h2"
            gutterBottom
          >
            {article?.title}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {article?.byline}
          </Typography>
          <Card>
            <CardMedia
              component="img"
              src={
                article?.multimedia?.length > 0
                  ? article?.multimedia[0]?.url
                  : nytimesLogo
              }
              alt="news-img"
            />
            <CardContent sx={styles.cardContent}>
              <Typography component="h2" variant="h3" gutterBottom>
                {article?.multimedia?.length > 0
                  ? article?.multimedia[0]?.caption
                  : ""}
              </Typography>
              <Typography variant="body1" paragraph>
                {article?.abstract}
              </Typography>
            </CardContent>
            <CardActions>
              <Link href={path.HOME} underline="none">
                <CustomButton variant="outlined" size="small" text="Back" />
              </Link>
              <Link href={article?.url} underline="none">
                <CustomButton variant="contained" size="small" text="Source" />
              </Link>
            </CardActions>
          </Card>
          <Comments />
        </Container>
      </div>
    </>
  );
};

export default ArticleDetail;
