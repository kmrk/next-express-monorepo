"use client"
import { ReactElement, createContext, useContext, useEffect, useState } from "react";

interface AppContextInterface {
  isDark: boolean;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextInterface>({
  isDark: false,
  toggleTheme: () => { },
});

interface ThemePropsInterface {
  children?: JSX.Element | Array<JSX.Element>;
}

const WithAppContext = ({ children }: ThemePropsInterface): ReactElement => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [loading, setLoadingBoolean] = useState(false);

  useEffect(() => initialThemeHandler());

  function isLocalStorageEmpty(): boolean {
    return !localStorage.getItem("isDarkTheme");
  }

  function initialThemeHandler(): void {
    if (isLocalStorageEmpty()) {
      localStorage.setItem("isDarkTheme", `true`);
      document!.querySelector("body")!.classList.add("dark");
      setIsDarkTheme(true);
    } else {
      const isDarkTheme: boolean = JSON.parse(
        localStorage.getItem("isDarkTheme")!
      );
      isDarkTheme && document!.querySelector("body")!.classList.add("dark");
      setIsDarkTheme(() => {
        return isDarkTheme;
      });
    }
  }

  function toggleTheme(): void {
    const isDarkTheme: boolean = JSON.parse(
      localStorage.getItem("isDarkTheme")!
    );
    setIsDarkTheme(!isDarkTheme);
    toggleDarkClassToBody();
    setValueToLocalStorage();
  }

  function toggleDarkClassToBody(): void {
    document!.querySelector("body")!.classList.toggle("dark");
  }

  function setValueToLocalStorage(): void {
    localStorage.setItem("isDarkTheme", `${!isDarkTheme}`);
  }

  return (
    <AppContext.Provider value={{ isDark: isDarkTheme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  )

}
export const useAppContext = () => useContext(AppContext);
export { WithAppContext };


