import { combineReducers } from "redux";
import { userReducer } from "./user.reducer";
import { studentReducer } from "./student.reducer";
import { teacherReducer } from "./teacher.reducer";

const reducer = combineReducers({
  user: userReducer,
  student: studentReducer,
  teacher: teacherReducer,
});

export default reducer;
