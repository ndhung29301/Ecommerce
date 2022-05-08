import { Box } from "@chakra-ui/layout";
import { BoxProps } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";

interface ILayoutProps extends BoxProps {
    is_auth?: boolean;
}

const LayoutWrapper = styled(Box)`
  display: grid;
  grid-template:
    "side      header     "
    "side        main       "
    "side      footer     ";
  grid-template-rows: auto 1fr auto;
  grid-template-columns: min-content 1fr;
  min-height: 100vh;
  width: 100%;
`;

export const LayoutControl = styled.div`
  grid-area: control;
  z-index: 30;
`;

export const LayoutHeader = styled.header`
  grid-area: header;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const LayoutNav = styled.nav`
  grid-area: nav;
  z-index: 50;
  position: sticky;
  top: 65.82px;
`;

export const LayoutBreadcrumb = styled(Box)`
  grid-area: breadcrumb;
  z-index: 20;
`;

export const LayoutSide = styled(Box)`
  grid-area: side;
  z-index: 20;
  width: 175px;
`;

export const LayoutFooter = styled.footer`
  grid-area: footer;
`;

export const LayoutMain = styled.main`
  grid-area: main;
  overflow: hidden;
`;

export const LayoutContent = styled(Box)`
  display: grid;
  grid-template: "body" min-content;
  height: 100%;
`;

export const Layout: React.FC<ILayoutProps> = ({
                                                   children,
                                                   ...props
                                               }): JSX.Element => {
    return (
        <LayoutWrapper
            bg={{
                base: "white",
                sm: "white",
                lg: "gray.80",
            }}
            {...props}
        >
            {children}
        </LayoutWrapper>
    );
};