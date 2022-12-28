import { useParams, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import { useAppSelector } from "../../hooks/useAppSelector";
import { topStoriesSelector } from "../../selectors/newsSelector";
import { useEffect, useState } from "react";

type Props = {
  id: any;
};

const ArticleDetail = () => {
  const [article, setArticle] = useState<any>({});
  const { id } = useParams<Props>();
  const navigate = useNavigate();
  const topStories = useAppSelector(topStoriesSelector);

  const validateId = () => {
    if (
      id &&
      topStories &&
      topStories?.length > 0 &&
      id <= topStories?.length &&
      id >= 0
    ) {
      return true;
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    let isValid = validateId();
    if (isValid) {
      setArticle(topStories[id]);
    }
  }, []);
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      <Card sx={{ maxWidth: 800 }}>
        <CardMedia
          component="img"
          src={
            article.multimedia?.[0]?.url
              ? `https://nyt.com/${articleList.multimedia[0].url}`
              : "https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg"
          }
          alt="news-img"
        />
        <CardContent>
          <Typography component="h1" variant="h3" gutterBottom>
            {articleList.title}
          </Typography>
          <Typography variant="caption" gutterBottom>
            {articleList.section} news - {articleList.byline} - Published on:
            {articleList.published_date}
          </Typography>
          <Divider />
          <Typography variant="body1" paragraph>
            {articleList.abstract}
          </Typography>
          <Typography variant="caption">
            <a href={articleList.url}>Web resource</a>
          </Typography>
          <Divider />
          <Typography variant="h6">Comments</Typography>
          {comments.map((items) => {
            return (
              <div key={items.id}>
                <Typography variant="body2">
                  {items.user.username}: {items.body}
                </Typography>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
};
