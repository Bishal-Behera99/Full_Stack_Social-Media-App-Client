import { configureStore } from "@reduxjs/toolkit";
import appConfigReducer from "./slices/appConfigSlice";
import postSliceReducer from "./slices/postSlice";
import FeedsliceReducer from "./slices/Feedslice";

export default configureStore({
  reducer: {
    appConfigReducer,
    postSliceReducer,
    FeedsliceReducer,
  },
});
