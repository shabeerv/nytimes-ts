import { FC } from "react";
import Typography, { TypographyProps } from "@mui/material/Typography";

const Text: FC<TypographyProps> = ({
  align,
  variant,
  gutterBottom,
  paragraph,
  color,
  sx,
  children,
}) => {
  return (
    <Typography
      variant={variant}
      align={align}
      color={color}
      gutterBottom={gutterBottom}
      paragraph={paragraph}
      sx={sx}
    >
      {children}
    </Typography>
  );
};

export default Text;
