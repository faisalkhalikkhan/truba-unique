export const getTeacher = (data) => {
  return {
    type: "GET_TEACHER",
    payload: data,
  };
};
