"use client"
import { createContext, useState } from "react"

 export const ThemeContext = createContext({})
const ThemeProvider = ({children}:{children:React.ReactNode}) => {
    const [read,setread] = useState([])
    const [wishlist, setwishlist] = useState([])
    const valuedata = {
        read,setread,
        wishlist, setwishlist
    }
    return <ThemeContext.Provider value={valuedata}>{children}</ThemeContext.Provider>
}

export default ThemeProvider