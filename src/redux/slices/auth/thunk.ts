import { AuthResponse, LoginCredentials } from '@/app/types/auth/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk<AuthResponse, LoginCredentials>(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/auth/login" , credentials)
      return response?.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
