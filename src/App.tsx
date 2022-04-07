import React, { useState } from "react";
import "./App.css";
import { Theme, ThemeContext } from "./components/Context";
import { Form } from "./components/Form";

function App() {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  const setCurrentTheme = (theme: Theme) => {
    if (theme === Theme.DARK) {
      setTheme(Theme.LIGHT);
    } else setTheme(Theme.DARK);
  };

  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme, setCurrentTheme }}>
        <Form />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
