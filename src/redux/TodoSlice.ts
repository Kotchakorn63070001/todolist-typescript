import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../Todo";

// set initial state เป็น array เปล่า
const initialState = [] as Todo[];

const todoSlice = createSlice({
    // ชื่อของ slice
    name: "todolist",
    initialState,
    reducers: {
        addItemTodo: {
            reducer: (state, action: PayloadAction<Todo>) => {
                state.push(action.payload);
            },
            prepare: (itemName: string) => ({
                payload: {
                    itemName,
                    status: false
                } as Todo,
            }),
        },
        setStatusItem(state, action: PayloadAction<{index: number; checked: boolean}>){
            const indexItem = action.payload.index;
            state[indexItem].status = action.payload.checked;
            state.splice(indexItem, 1)
        },
    },
});

// สร้าง action โดยที่เอามาจาก reducer
export const {addItemTodo, setStatusItem} = todoSlice.actions;
export default todoSlice.reducer;
