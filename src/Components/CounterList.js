import React from "react";
import Counter from "./Counter";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../Actions";

const CounterList = () => {
  const counters = useSelector((state) => state.counters);
  const counterElements = counters.map(({ id, title }) => (
    <Counter key={id} id={id} />
  ));
  const dispatch = useDispatch(reset());

  return (
    <div>
      {counterElements}
      <div>
        <Button
          color="primary"
          variant="contained"
          className="reset"
          onClick={() => dispatch(reset())}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default CounterList;
