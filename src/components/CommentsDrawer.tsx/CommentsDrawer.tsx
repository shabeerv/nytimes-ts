import { Drawer, Box, Typography } from "@mui/material";
import { useState } from "react";
import CustomButton from "../common/CustomButton";

export const CommentsDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <CustomButton
        size="small"
        variant="contained"
        text="comments"
        onClick={() => setIsDrawerOpen(true)}
      />
      <Drawer
        anchor="bottom"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box sx={{ width: "auto" }} role="presentation">
          <Typography variant="h1" component="div">
            Comments
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default CommentsDrawer;
