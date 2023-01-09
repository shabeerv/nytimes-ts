import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CustomButton from "../common/CustomButton";

interface IDialogProps {
  title: string;
  children: React.ReactNode;
  open: boolean;
  setOpen: any;
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
        <CustomButton text="Close" onClick={() => setOpen(false)} />
        <CustomButton
          variant="contained"
          text="Confirm"
          onClick={() => {
            setOpen(false);
            onConfirm();
          }}
        />
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
