import React from "react";
import { Text} from "@chakra-ui/react";
import {Layout} from "../../origanisms/layout";
import {HeaderNormal} from "../../origanisms/header_normal";
import {Container} from "../../origanisms/container";
import {FooterNormal} from "../../origanisms/footer_normal";

export const Home :React.VFC=():JSX.Element=>{
    return (
        <Layout>
            <HeaderNormal/>
          <Container>
              <Text>day la  man home</Text>
          </Container>
          <FooterNormal/>

        </Layout>
    )
}