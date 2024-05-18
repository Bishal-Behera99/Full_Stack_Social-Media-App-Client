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

        const index = state.feeddata.posts.findIndex(
          (items) => items._id === post._id
        );

        if (index != -1) {
          state.feeddata.posts[index] = post;
        }
      });
  },
});

export default Feedslice.reducer;
