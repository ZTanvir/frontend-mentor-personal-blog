import { createContext, useContext, useState, type ReactNode } from "react";

type Theme = "light" | "dark";
type ThemeContextType = {
  theme: Theme;
  setTheme: (previousTheme: Theme) => void;
};
const ThemeContext = createContext<ThemeContextType | string>("light");

type ThemeContextProviderProps = {
  children: ReactNode;
};
export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<Theme>("light");
  const contextValue: ThemeContextType = { theme, setTheme };

  return <ThemeContext value={contextValue}>{children}</ThemeContext>;
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
