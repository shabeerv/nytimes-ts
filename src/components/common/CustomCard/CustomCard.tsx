import { FC, memo } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Text from "../Text";
import moment from "moment";
import Divider from "@mui/material/Divider";
import CustomButton from "../CustomButton";
import { styles } from "./styles";
import Link from "@mui/material/Link";
import { path } from "../../../helpers/constants";
import strings from "../../../localization";

interface ICardProps {
  title: string;
  byline: string;
  imageURL: string;
  section: string;
  abstract: string;
  published_date: string;
  index?: number;
}

const CustomCard: FC<ICardProps> = ({
  title,
  byline,
  imageURL,
  section,
  abstract,
  published_date,
  index,
}) => {
  return (
    <Card sx={styles.card}>
      <CardMedia
        component="img"
        width="300"
        height="300"
        src={imageURL}
        alt="news-img"
      />
      <CardContent sx={styles.cardContent}>
        <Text gutterBottom variant="h6">
          {title}
        </Text>

        <Text color="textSecondary" variant="caption">
          {byline} - {strings.section}: {section} - {strings.published_on}:
          {published_date
            ? moment(published_date).format("LLL")
            : strings.notAvailable}
        </Text>

        <Divider />
        <Text variant="body2">{abstract}</Text>
      </CardContent>

      <CardActions>
        <Link href={`${path.ARTICLEDETAIL}/${index}`} underline="none">
          <CustomButton size="small">{strings.view}</CustomButton>
        </Link>
      </CardActions>
    </Card>
  );
};

export default memo(CustomCard);
