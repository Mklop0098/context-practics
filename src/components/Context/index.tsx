import React from "react";

export enum Theme {
  DARK,
  LIGHT,
}

export const ThemeContext = React.createContext({
  theme: Theme.LIGHT,
  setCurrentTheme: (theme: Theme) => {},
});
