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

export const getPostComments = createAsyncThunk(
  "/post/comment",
  async (body, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const response = await axiosClient.post("/post/comment", body);
      console.log("user commnets", response);

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
    postComment: {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getuserProfile.fulfilled, (state, action) => {
        state.userProfile = action.payload;
      })
      .addCase(likeunlike.fulfilled, (state, action) => {
        const post = action.payload.post;

        const index = state?.userProfile?.posts?.findIndex(
          (items) => items._id === post._id
        );

        console.log("userprofile", index);
        if (index != undefined && index != -1) {
          state.userProfile.posts[index] = post;
        }
      })
      .addCase(getPostComments.fulfilled, (state, action) => {
        const post = action.payload.post;

        const index = state?.userProfile?.posts?.findIndex(
          (items) => items._id === post._id
        );

        if (index != undefined && index != -1) {
          state.userProfile.posts[index] = post;
        }
      });
  },
});

export default postSlice.reducer;
