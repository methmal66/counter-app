export const increment = (id) => ({
  type: "INCREMENT",
  id,
});

export const decrement = (id) => ({
  type: "DECREMENT",
  id,
});

export const remove = (id) => ({
  type: "REMOVE",
  id,
});

export const reset = () => ({
  type: "RESET",
});
