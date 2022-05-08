import React from "react";
import {Box} from "@chakra-ui/layout";
import {LayoutMain} from "../layout";

export const Container: React.FC=(props):JSX.Element=>{
    return <Box as={LayoutMain}>{props.children}</Box>
}