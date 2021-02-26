import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";

import MenuIcon from "@material-ui/icons/Menu";
import React from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export const MyAppBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Agencia de Medición
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};
