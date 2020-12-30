const init = [
  { id: 0, value: 0, title: "milk" },
  { id: 1, value: 1, title: "eggs" },
  { id: 2, value: 5, title: "bread" },
  { id: 3, value: 1, title: "cookie" },
  { id: 4, value: 10, title: "chocolate" },
];

const counters = (state = init, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state.map((count) => {
        if (count.id === action.id) {
          count.value++;
        }
        return count;
      });

    case "DECREMENT":
      return state.map((count) => {
        if (count.id === action.id && count.value !== 0) {
          count.value--;
        }
        return count;
      });

    case "RESET":
      return state.map((count) => {
        count.value = 0;
        return count;
      });

    case "REMOVE":
      return state.filter((count) => count.id !== action.id);

    default:
      return state;
  }
};

export default counters;
