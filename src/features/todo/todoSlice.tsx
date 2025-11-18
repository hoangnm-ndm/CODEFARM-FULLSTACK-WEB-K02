import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Todo } from "../../types/Todo";

const initialState: Todo = {
  name: "",
  description: "",
  priority: "medium",
  isCompleted: false,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
    getTodo: (state) => {},
    toggleStatusTodo: (state) => {},
    createTodo: (state) => {},
    updateTodo: (state) => {},
    deleteTodo: (state) => {},
  },
});

// Action creators are generated for each case reducer function
export const { getTodo, toggleStatusTodo, createTodo, updateTodo, deleteTodo } =
  todoSlice.actions;

console.log(todoSlice);

const todoReducer = todoSlice.reducer;
export default todoReducer;
