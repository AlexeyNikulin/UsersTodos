import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTodosAsync } from '../service/todos';

const initialState = {
    items: [],
    error: false,
    loading: true,
};

export const fetchTodos = createAsyncThunk(
    'api_todos',
    async () => {
        const res = await getTodosAsync()
        return res.data;
    }
)

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        
    },
    extraReducers: {
    [fetchTodos.pending.type]: (state, action) => {
      state.loading = true;
    },
    [fetchTodos.fulfilled.type]: (state, action) => {
      state.items = action.payload
      state.loading = false;
    },
    [fetchTodos.rejected.type]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
    }
  }
})

export default todosSlice.reducer;