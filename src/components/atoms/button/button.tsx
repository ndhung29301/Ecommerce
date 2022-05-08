import React from "react";
import {Button, ButtonProps} from "@chakra-ui/react";
interface IButton extends ButtonProps{

}

export const  Buttons :React.FC<IButton>=():JSX.Element=>{
    return (
        <Button/>


    )
}
