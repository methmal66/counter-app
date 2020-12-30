import React from "react";
import CounterList from "./Components/CounterList";
import Navbar from "./Components/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  root: {
    marginLeft: "15rem",
  },
}));

const App = () => {
  const classes = useStyles();
  const counters = useSelector((state) => state.counters);

  const getTotalItems = () =>
    counters.filter((counter) => counter.value !== 0).length;

  return (
    <React.Fragment>
      <Navbar totalItems={getTotalItems()} />
      <div className={classes.root}>
        <CounterList />
      </div>
    </React.Fragment>
  );
};

export default App;
