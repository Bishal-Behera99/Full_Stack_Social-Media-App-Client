import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setLoading } from "./appConfigSlice";
import { axiosClient } from "../../utils/axiosClient";

export const getuserProfile = createAsyncThunk(
  "/user/getuserprofile",
  async (body, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const response = await axiosClient.post("/user/getuserprofile", body);

      // console.log("user Profile Response", response);
      return response.data.result;
    } catch (error) {
      // console.log(error);
      return Promise.reject(error);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

export const likeunlike = createAsyncThunk(
  "/post/likeunlike",
  async (body, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const response = await axiosClient.post("/post/likeunlike", body);

      console.log("user like", response);
      return response.data.result;
    } catch (error) {
      // console.log(error);
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
    builder
      .addCase(getuserProfile.fulfilled, (state, action) => {
        state.userProfile = action.payload;
      })
      .addCase(likeunlike.fulfilled, (state, action) => {
        const post = action.payload.post;

        const index = state.userProfile.posts.findIndex(
          (items) => items._id === post._id
        );

        console.log(index);
        if (index != -1) {
          state.userProfile.posts[index] = post;
        }
      });
  },
});

export default postSlice.reducer;
