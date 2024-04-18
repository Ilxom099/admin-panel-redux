import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    courses: [
        {id: 1, name: "Marketing", category: "Business", price: "3500000", status: true},
        {id: 2, name: "Frontend", category: "IT", price: "1500000", status: true},
        {id: 3, name: "English", category: "Language", price: "700000", status: true},
        {id: 4, name: "Backend", category: "IT", price: "1500000", status: true},
        {id: 5, name: "Mental Arifmetic", category: "Math", price: "1000000", status: false},
    ]
}

const slice = createSlice({
    name: "Course",
    initialState: initialState,
    reducers: {
        addCourse: (state, action) => {
            state.courses.push(action.payload);
        },
        deleteCourse: (state, action) => {
            state.courses.splice(state.courses.indexOf(action.payload), 1);
        },
        editCourse: (state, action) => {

        }
    }
})

export const {addCourse, deleteCourse, editCourse} = slice.actions;
export default slice.reducer