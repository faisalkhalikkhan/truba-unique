const initialState = {}

export const teacherReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case "GET_TEACHER":
            return state = payload
    
        default:
            return state
    }
}