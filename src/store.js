import { configureStore } from "@reduxjs/toolkit";

import changeTheme from "./redux/ThemeSlice";

export const store = configureStore({
  reducer: {
    theme: changeTheme,
  },
});
