import React from "react";
import {Box} from "@chakra-ui/react";
import {LayoutHeader} from "../layout";

export const HeaderNormal:React.VFC=():JSX.Element=>{
    return (
        <Box as={LayoutHeader}>
            day la header
        </Box>
    )
}