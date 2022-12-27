import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import moment from "moment";
import Divider from "@mui/material/Divider";
import CustomButton from "../CustomButton";

interface ICardProps {
  title: string;
  byline: string;
  imageURL: string;
  section: string;
  abstract: string;
  published_date: string;
}

const CustomCard: React.FC<ICardProps> = ({
  title,
  byline,
  imageURL,
  section,
  abstract,
  published_date,
}) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        width="300"
        height="300"
        src={imageURL}
        alt="news-img"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="h6">
          {title}
        </Typography>
        <Typography color="textSecondary" variant="caption">
          {byline} - section: {section} - published on:
          {published_date ? moment(published_date).format("LLL") : "N/A"}
        </Typography>
        <Divider />
        <Typography variant="body2" component="p">
          {abstract}
        </Typography>
      </CardContent>
      <CardActions>
        <CustomButton size="small" text="View" />
      </CardActions>
    </Card>
  );
};

export default CustomCard;
