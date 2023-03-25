import { configureStore } from "@reduxjs/toolkit";

import changeTheme from "./redux/themeSlice";

export const store = configureStore({
  reducer: {
    theme: changeTheme,
  },
});
