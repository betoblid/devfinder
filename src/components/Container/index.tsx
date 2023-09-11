import React from "react";
import { Usercontextprops } from "../../context/backgrondContext";
import "./Container.css"

interface ContainerProps {
    children?: React.ReactNode
}

const Container = ({children}: ContainerProps) => {

    const {theme} = Usercontextprops();

    return(
        <div className={theme} id="container_children">
            {children}
        </div>
    )
}

export default Container;