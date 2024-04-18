import {configureStore} from "@reduxjs/toolkit";
import CourseReducer from "./reducers/courseReducer";

export default configureStore({
    reducer: {
        CourseReducer
    }
})