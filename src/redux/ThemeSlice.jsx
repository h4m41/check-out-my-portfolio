import { createSlice } from "@reduxjs/toolkit";

export const ThemeSlice = createSlice({
  name: "theme",
  initialState: {
    isDark: false,
  },
  reducers: {
    changeTheme: (state) => {
      state.isDark = !state.isDark;
    },
  },
});

export const { changeTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;
