import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary" style={{ height: "80px" }}>
        <Toolbar style={{ paddingTop: "10px" }}>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Shopper
          </Typography>
          {props.user ? (
            <Button color="inherit" onClick={props.logout}>
              Logout
            </Button>
          ) : (
            <Button color="inherit" onClick={props.login}>
              {" "}
              Log In
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = { classes: PropTypes.object.isRequired };

export default withStyles(styles)(ButtonAppBar);