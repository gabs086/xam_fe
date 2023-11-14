import { createAsyncThunk } from '@reduxjs/toolkit';

export const registerUser = createAsyncThunk('user/registerUser', async (payload: any, { rejectWithValue }) => {});

export const loginUser = createAsyncThunk('user/loginUser', async (payload: any, { rejectWithValue }) => {});
