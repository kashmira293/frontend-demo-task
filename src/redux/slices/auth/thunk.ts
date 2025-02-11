import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginCredentials, AuthResponse } from './types';
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
