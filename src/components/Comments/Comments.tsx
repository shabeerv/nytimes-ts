import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { getComments } from "../../actions/commentsAction";
import { commentsSelector } from "../../selectors/commentsSelector";
import { useAppSelector } from "../../hooks/useAppSelector";
import { styles } from "./styles";

const Comments = () => {
  const dispatch = useAppDispatch();
  const commentsList = useAppSelector(commentsSelector);

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);
  return (
    // <>
    //   <Typography variant="h4">Comments</Typography>
    //   {commentsList.map((comments, index) => (
    //     <>
    //       <Paper style={{ padding: "30px 10px", marginTop: "30" }}>
    //         <Grid container wrap="nowrap" spacing={1}>
    //           <Grid justifyContent="left" item xs zeroMinWidth>
    //             <h4 style={{ margin: 0, textAlign: "left" }}>
    //               {comments?.user?.username}
    //             </h4>
    //             <p style={{ textAlign: "left" }}>{comments?.body}</p>
    //           </Grid>
    //         </Grid>
    //       </Paper>
    //     </>
    //   ))}
    // </>
    <>
      <Typography sx={{ marginTop: "20px" }} variant="h4" gutterBottom>
        Comments
      </Typography>
      <List sx={styles.list}>
        {commentsList.map((comments, index) => (
          <>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={comments.body}
                secondary={
                  <>
                    <Typography
                      sx={styles.typography}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      username:{" "}
                    </Typography>
                    {comments.user.username}
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ))}
      </List>
    </>
  );
};

export default Comments;
