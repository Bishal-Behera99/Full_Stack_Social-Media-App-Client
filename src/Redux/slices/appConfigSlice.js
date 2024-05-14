import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axiosClient";

export const getMyprofile = createAsyncThunk(
  "user/getmyProfile",
  async (_, thunkApi) => {
    try {
      thunkApi.dispatch(setLoading(true));
      const response = await axiosClient.get("/user/getmyProfile");
      return response.data.result;
      //   console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      thunkApi.dispatch(setLoading(false));
    }
  }
);

const appConfigSlice = createSlice({
  name: "appConfigSlice",
  initialState: {
    isLoading: false,
    isProfile: {},
  },

  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMyprofile.fulfilled, (state, action) => {
      state.isProfile = action.payload.user;
    });
  },
});
export default appConfigSlice.reducer;

export const { setLoading } = appConfigSlice.actions;
