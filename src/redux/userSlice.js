import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { addUser, getUserInfo } from 'api/fetchUser';

export const fetchUserInfo = createAsyncThunk(
  'user/fetchUserInfo',
  async (_, { rejectWithValue }) => {
    try {
      const userApi = await getUserInfo();
      return userApi;
    } catch (error) {
      toast.error('Oops, something went wrong!');
      return rejectWithValue(error);
    }
  }
);

export const addTeammate = createAsyncThunk(
  'user/addTeammate',
  async (_, { rejectWithValue }) => {
    try {
      await addUser();
      const userApi = await getUserInfo();
      toast.success('Contact added!');
      return userApi;
    } catch (error) {
      toast.error('Oops, something went wrong!');
      return rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchUserInfo.pending]: (state, _) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    [fetchUserInfo.fulfilled]: (state, action) => {
      return {
        ...state,
        userInfo: [...action.payload],
      };
    },

    [addTeammate.pending]: (state, _) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    [addTeammate.fulfilled]: (state, action) => {
      return {
        ...state,
        userInfo: [...action.payload],
      };
    },
  },
});

export const getUser = state => state.user.userInfo;

export const userReducer = userSlice.reducer;
