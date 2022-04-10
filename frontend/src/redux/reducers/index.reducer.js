import { combineReducers } from "redux";
import { userReducer } from "./user.reducer";
import {studentReducer} from './student.reducer'

const reducer = combineReducers({
  user: userReducer,
  student: studentReducer
});

export default reducer;
