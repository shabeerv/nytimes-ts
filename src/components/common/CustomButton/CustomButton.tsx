import { SxProps } from "@mui/material";
import Button from "@mui/material/Button";
import {
  muiButtonColors,
  muiButtonSize,
  muiButtonVariants,
} from "../../../helpers/constants";

type Props = {
  text: string;
  fullWidth?: boolean;
  sx?: SxProps;
  onClick?: () => void;
  variant?: "text" | "outlined" | "contained" | undefined;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
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
