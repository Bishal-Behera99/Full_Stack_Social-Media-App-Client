import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axiosClient";

// get My Profile

export const getMyprofile = createAsyncThunk(
  "user/getmyProfile",
  async (_, thunkApi) => {
    try {
      thunkApi.dispatch(setLoading(true));

      const response = await axiosClient.get("/user/getmyProfile");

      return response.data.result;
      //   console.log(response);
    } catch (error) {
      return Promise.reject(error);
    } finally {
      thunkApi.dispatch(setLoading(false));
    }
  }
);

// Update My Profile
export const updateMyProfile = createAsyncThunk(
  "user/updateMyProfile",
  async (body, thunkApi) => {
    try {
      thunkApi.dispatch(setLoading(true));
      const response = await axiosClient.post("/user/updateMyProfile", body);
      return response.data.result;
    } catch (error) {
      return Promise.reject(error);
    } finally {
      thunkApi.dispatch(setLoading(false));
    }
  }
);

const appConfigSlice = createSlice({
  name: "appConfigSlice",
  initialState: {
    isLoading: false,
    isProfile: null,
  },

  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMyprofile.fulfilled, (state, action) => {
        state.isProfile = action.payload.user;
      })
      .addCase(updateMyProfile.fulfilled, (state, action) => {
        state.isProfile = action.payload.user;
      });
  },
});
export default appConfigSlice.reducer;

export const { setLoading } = appConfigSlice.actions;
