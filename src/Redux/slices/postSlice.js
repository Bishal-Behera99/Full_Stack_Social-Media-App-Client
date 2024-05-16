import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setLoading } from "./appConfigSlice";
import { axiosClient } from "../../utils/axiosClient";

export const getuserProfile = createAsyncThunk(
  "/user/getuserprofile",
  async (body, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const response = await axiosClient.post("/user/getuserprofile", body);

      //   console.log("user Profile Response", response);

      return response.data.result;
    } catch (error) {
      return Promise.reject(error);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

const postSlice = createSlice({
  name: "postSlice",
  initialState: {
    userProfile: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getuserProfile.fulfilled, (state, action) => {
      state.userProfile = action.payload;
    });
  },
});

export default postSlice.reducer;
