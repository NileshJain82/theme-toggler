import { createContext,useContext } from "react";

export const ThemeContext = createContext({
    themeMode : 'light',
    lightTheme: ()=>{},
    darkTheme :()=>{},
    background:'#000000'
})

export const ThemeProvider = ThemeContext.Provider

export default function useThemeContext(){
    return useContext(ThemeContext)
}