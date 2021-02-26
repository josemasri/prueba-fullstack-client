import React, { useState } from "react";

import { AddMaintenanceModal } from "./AddMaintenanceModal";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export const Car = ({
  car: { image, make, model, description, id },
  maintenances,
  addMaintenance,
}) => {
  const classes = useStyles();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title={make} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {make} {model}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {maintenances.find((maintenance) => maintenance.car.id === id) ? (
          <Button
            onClick={() => setIsModalOpen(true)}
            size="small"
            color="primary"
            disabled={true}
          >
            En Mantenimiento
          </Button>
        ) : (
          <Button
            onClick={() => setIsModalOpen(true)}
            size="small"
            color="primary"
          >
            Poner en Mantenimiento
          </Button>
        )}
      </CardActions>
      <AddMaintenanceModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        addMaintenance={addMaintenance}
        carId={id}
      />
    </Card>
  );
};
