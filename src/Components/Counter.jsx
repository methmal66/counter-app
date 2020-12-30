import React from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Badge from "@material-ui/core/Badge";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, remove } from "../Actions";

const Counter = ({ id }) => {
  const { value, title } = useSelector((state) => {
    const counter = state.counters.filter((counter) => counter.id === id)[0];
    const value = counter.value;
    const title = counter.title;
    return { value, title };
  });
  const dispatch = useDispatch();

  const badge = (
    <Badge
      badgeContent={value === 0 ? "Zero" : value}
      color={value === 0 ? "error" : "primary"}
    >
      <font face="verdana" size="6">
        <span>{title}</span>
      </font>
    </Badge>
  );

  return (
    <div className="counter">
      <div className="item name">{badge}</div>

      <div>
        <Button
          onClick={() => dispatch(increment(id))}
          variant="contained"
          startIcon={<AddIcon />}
        />
      </div>

      <div>
        <Button
          onClick={() => dispatch(decrement(id))}
          variant="contained"
          startIcon={<RemoveIcon />}
        />
      </div>

      <div>
        <Button
          onClick={() => dispatch(remove(id))}
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
        />
      </div>
    </div>
  );
};

export default Counter;
