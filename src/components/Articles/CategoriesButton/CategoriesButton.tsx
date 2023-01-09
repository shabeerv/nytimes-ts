import Stack from "@mui/material/Stack";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import en from "../../../localization/en";

interface ICategoriesProps {
  value: string;
  onChange:
    | ((event: React.MouseEvent<HTMLElement, MouseEvent>, value: any) => void)
    | undefined;
}

const CategoriesButton: React.FC<ICategoriesProps> = ({ value, onChange }) => {
  const toggleButtons = {
    world: en.world,
    science: en.science,
  };

  return (
    <Stack direction="row" spacing={2} justifyContent="center">
      <ToggleButtonGroup
        color="primary"
        value={value}
        exclusive
        onChange={onChange}
        aria-label="Platform"
      >
        {Object.keys(toggleButtons).map((key, i) => {
          return (
            <ToggleButton key={key} value={key}>
              {key}
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </Stack>
  );
};
export default CategoriesButton;
