import "./Search.css"
import React, { useState } from "react"
import { Usercontextprops } from "../../context/backgrondContext"; 
import { KeyboardEvent } from "react";

interface searchProps {
    FunctionApi: (userName: string) => Promise<void>;
}
export default function Search({ FunctionApi }: searchProps) {

    const [userName, setuserName] = useState<string>("")

    const {card, searchtheme} = Usercontextprops()

    //criando uma function quando clicar em enter o botao search sera ativado automaticamente
    function Keydown(e:KeyboardEvent){
        if(e.key === "Enter"){
            FunctionApi(userName)
        }
    }
    
    return (
        <div>
            <div className={card} id="box_search">
                <label htmlFor="txtsearch">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </label>
                <input
                    id="txtsearch"
                    placeholder="Digite um nome de usuario"
                    value={userName}
                    className={searchtheme}
                    onChange={(e) => setuserName(e.target.value)}
                    title="caixa para se digitar nome de usuario"
                    onKeyDown={Keydown}
                />
                <button onClick={() => FunctionApi(userName)}>
                    Search
                </button>
            </div>
        </div>
    )
}

