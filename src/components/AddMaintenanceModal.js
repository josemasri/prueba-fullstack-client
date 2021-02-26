import {
  Button,
  Modal,
  TextField,
  Typography,
  createStyles,
  makeStyles,
} from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import React, { useState } from "react";

import DateFnsUtils from "@date-io/date-fns";
import { toast } from "react-toastify";

const modalStyle = {
  outline: "none",
  top: "50%",
  left: "50%",
  transform: `translate(-50%, -50%)`,
};

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

export const AddMaintenanceModal = ({
  isModalOpen,
  setIsModalOpen,
  addMaintenance,
  carId,
}) => {
  const classes = useStyles();
  const [estimatedDate, setEstimatedDate] = useState(new Date());
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Typography variant="h5">Ingresa los datos del mantenimiento</Typography>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Fecha estimada"
          value={estimatedDate}
          onChange={(date) => setEstimatedDate(date)}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </MuiPickersUtilsProvider>
      <TextField
        onChange={({ target: { value } }) => setFirstName(value)}
        id="standard-basic"
        label="Nombre"
        value={firstName}
      />
      <TextField
        onChange={({ target: { value } }) => setLastName(value)}
        id="standard-basic"
        label="Apellido"
        value={lastName}
      />
      <Button
        style={{ margin: "20px auto 0 auto", display: "block" }}
        variant="contained"
        color="secondary"
        onClick={async () => {
          try {
            await addMaintenance({
              firstName,
              lastName,
              carId,
              estimatedDate,
            });
            toast("Mantenimiento agreagdo con éxito", {
              type: "success",
            });
            setIsModalOpen(false);
          } catch (error) {
            toast("Ha ocurrido un error", {
              type: "error",
            });
          }
        }}
      >
        Poner en mantenimiento
      </Button>
    </div>
  );
  return (
    <Modal
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  );
};
