import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
  },

  reducers: {
    payPersons: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("PayUsers", JSON.stringify(action.payload));
    },
    restorePerson: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { payPersons, restorePerson } = userSlice.actions;
export default userSlice.reducer;
