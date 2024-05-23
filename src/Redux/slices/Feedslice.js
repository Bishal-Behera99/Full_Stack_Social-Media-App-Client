import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setLoading } from "./appConfigSlice";
import { axiosClient } from "../../utils/axiosClient";
import { likeunlike } from "./postSlice";

// Feed data means get data of users to whom i dont follow

export const getFeedData = createAsyncThunk(
  "/user/getfeeddata",
  async (_, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));

      const response = await axiosClient.post("user/getFeedData");
      console.log("response form feed", response);
      return response.data.result;
    } catch (error) {
      return Promise.reject(error);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

export const followUnfollow = createAsyncThunk(
  "/user/followunfollow",
  async (body, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));

      const response = await axiosClient.post("user/followunfollow", body);
      console.log("response form followunfollow", response);
      return response.data.result;
    } catch (error) {
      return Promise.reject(error);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

// Suggestions

export const suggestionslist = createAsyncThunk(
  "/user/suggestionslist",
  async (body, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));

      const response = await axiosClient.post("user/followunfollow", body);
      console.log("response form suggestionslist", response);
      return response.data.result;
    } catch (error) {
      return Promise.reject(error);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

const Feedslice = createSlice({
  name: "feedslice",

  initialState: {
    feeddata: {},
  },

  extraReducers: (builder) => {
    builder
      .addCase(getFeedData.fulfilled, (state, action) => {
        state.feeddata = action.payload;
      })
      .addCase(likeunlike.fulfilled, (state, action) => {
        const post = action.payload.post;
        console.log(post);
        const index = state?.feeddata?.posts?.findIndex(
          (item) => item._id === post._id
        );
        console.log("feed", index);
        if (index != undefined && index != -1) {
          state.feeddata.posts[index] = post;
        }
      })
      .addCase(followUnfollow.fulfilled, (state, action) => {
        const user = action.payload.user;

        const index = state?.feeddata?.followings?.findIndex(
          (item) => item._id == user._id
        );

        if (index != undefined && index != -1) {
          state.feeddata.followings.splice(index, 1);
          state.feeddata.suggestions.push(user);
        } else {
          state.feeddata.followings.push(user);
          // state.feeddata.suggestions.splice(index, 1);
        }
      })
      .addCase(suggestionslist.fulfilled, (state, action) => {
        const user = action.payload.user;

        const index = state?.feeddata?.suggestions?.findIndex(
          (item) => item._id == user._id
        );

        if (index != undefined && index != -1) {
          state.feeddata.followings.push(user);
          state.feeddata.suggestions.splice(index, 1);
        }
      });
  },
});

export default Feedslice.reducer;
