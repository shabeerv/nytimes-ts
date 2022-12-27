import { SxProps } from "@mui/material";
import Button from "@mui/material/Button";

type Props = {
  text: string;
  fullWidth?: boolean;
  sx?: SxProps;
  onClick?: () => void;
  variant?: "text" | "outlined" | "contained";
  color?:
    | "error"
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | undefined;
  size?: "small" | "medium" | "large" | undefined;
};

const CustomButton: React.FC<Props> = ({
  text,
  fullWidth,
  sx,
  variant,
  onClick,
  color,
  size,
}) => {
  fullWidth = fullWidth || false;
  return (
    <>
      <Button
        type="submit"
        fullWidth={fullWidth}
        variant={variant}
        sx={sx}
        onClick={onClick}
        color={color}
        size={size}
      >
        {text}
      </Button>
    </>
  );
};

export default CustomButton;
