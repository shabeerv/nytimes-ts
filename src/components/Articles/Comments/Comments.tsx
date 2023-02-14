import { Fragment } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import { useEffect } from "react";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { getComments } from "../../../actions/commentsAction";
import { commentsSelector } from "../../../selectors/commentsSelector";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { styles } from "./styles";
import strings from "../../../localization";
import Text from "../../common/Text";

const Comments = () => {
  const dispatch = useAppDispatch();
  const commentsList = useAppSelector(commentsSelector);

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);

  return (
    <>
      <Text sx={{ marginTop: "20px" }} variant="h4" gutterBottom>
        {strings.comments}
      </Text>
      <List sx={styles.list}>
        {commentsList?.map((comments, index) => (
          <Fragment key={index}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={comments?.body}
                secondary={
                  <>
                    <Text
                      sx={styles.typography}
                      variant="body2"
                      color="text.primary"
                    >
                      {strings.username}:{" "}
                    </Text>
                    {comments?.user?.username}
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </Fragment>
        ))}
      </List>
    </>
  );
};

export default Comments;
