import Button, { ButtonProps } from "@mui/material/Button";

const CustomButton: React.FC<ButtonProps> = ({
  fullWidth,
  sx,
  variant,
  onClick,
  color,
  size,
  children,
}) => {
  return (
    <Button
      type="submit"
      fullWidth={fullWidth}
      variant={variant}
      sx={sx}
      onClick={onClick}
      color={color}
      size={size}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
