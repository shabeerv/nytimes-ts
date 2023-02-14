import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CustomButton from "../common/CustomButton";
import strings from "../../localization";

interface IDialogProps {
  title: string;
  children: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onConfirm: () => void;
}

const AlertDialog: React.FC<IDialogProps> = ({
  title,
  children,
  open,
  setOpen,
  onConfirm,
}) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>

      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {children}
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <CustomButton onClick={() => setOpen(false)}>
          {strings.close}
        </CustomButton>

        <CustomButton
          variant="contained"
          onClick={() => {
            setOpen(false);
            onConfirm();
          }}
        >
          {strings.confirm}
        </CustomButton>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
