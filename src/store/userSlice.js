import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    payUsers: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("PayUsers", JSON.stringify(action.payload));
    },
  },
});

export const { payUsers } = userSlice.actions;
export default userSlice.reducer;
