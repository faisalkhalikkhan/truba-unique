const initialState = {}
export const studentReducer = (state=initialState, { type, payload }) => {
  switch (type) {
    case "GET_STUDENT":
      return (state = payload);
    default:
      return state;
  }
};
