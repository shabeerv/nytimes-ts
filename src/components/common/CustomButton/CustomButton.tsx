import Button from "@mui/material/Button";
import { Styles } from "./styles";

type Props = {
  text: string;
};

const CustomButton: React.FC<Props> = ({ text }) => {
  return (
    <>
      <Button type="submit" fullWidth variant="contained" sx={Styles.button}>
        {text}
      </Button>
    </>
  );
};

export default CustomButton;
