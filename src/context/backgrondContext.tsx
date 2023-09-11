import React, {createContext, useState, useContext} from "react"


interface MycontextProps {
    theme: string
    functionSetTheme: () => void
    card: string
    boxdashboard: string
    searchtheme: string
}
interface ContextProps {
    children: React.ReactNode
    
}


const Mycontext = createContext({} as MycontextProps)

const MyProvider = ({children}: ContextProps) => {

    const [theme, setTheme] = useState<string>("dark")
    const [card, setCard ] = useState<string>("card_dark")
    const [boxdashboard, setBoxDashboard] = useState("dashboard_dark")
    const [searchtheme, setSearchTheme] = useState<string>("search_dark")

    const functionSetTheme = () => {

        console.log("entro no hook")
        theme === "dark" ? setTheme("light") : setTheme("dark")
        functionSetCard()
    }
    const functionSetCard = () => {
        if(theme === "dark"){
            setCard("card_light")
            setBoxDashboard("dashboard_light")
            setSearchTheme("search_light")
        }else{
            setCard("card_dark")
            setBoxDashboard("dashboard_dark")
            setSearchTheme("search_dark")
        }
    }
    return(
        <Mycontext.Provider value={{
            theme,
            functionSetTheme,
            card,
            boxdashboard,
            searchtheme
            }}>
            {children}
        </Mycontext.Provider>
    )
}

const Usercontextprops = () => {

    const context = useContext(Mycontext)
    return context
}

export {MyProvider, Usercontextprops};
