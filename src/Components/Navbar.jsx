import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
    justifyContent: "space-between",
    padding: "0.5rem 1rem",
    color: "rgba(0, 0, 0, 0.9)",
    backgroundColor: "#f8f9fa !important",
  },
  item: {
    paddingTop: "0.3125rem",
    paddingBottom: "0.3125rem",
    marginRight: "1rem",
    fontSize: "1.25rem",
  },
}));

const Navbar = ({ totalItems }) => {
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      <span className={classes.item}>
        <strong>Total items selected</strong>
        <span> {totalItems}</span>
      </span>
    </nav>
  );
};

export default Navbar;
