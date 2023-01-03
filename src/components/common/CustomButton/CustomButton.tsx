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
  variant?: muiButtonVariants;
  color?: muiButtonColors;
  size?: muiButtonSize;
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
