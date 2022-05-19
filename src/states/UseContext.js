import { createContext, useContext } from "react"

const ThemeContext = createContext();

export default function UseContext() {
  return (
    <ThemeContext.Provider vale={{ mode: 'dark' }}>
      <Button />
    </ThemeContext.Provider>
  );
}

function Button() {
  const theme = useContext(ThemeContext);
  return (
    <button>{theme.mode}</button>
  );
}