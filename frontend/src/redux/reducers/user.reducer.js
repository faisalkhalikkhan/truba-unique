const initialState = {};
export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_USER":
      return (state = payload);
    default:
      return state
  }
};
