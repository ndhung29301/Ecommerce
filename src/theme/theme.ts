import { colors } from "./colors";
import { extendTheme } from "@chakra-ui/react";
import { fontSizes } from "./font_sizes";
import { fontWeights } from "./font_weights";
import { fonts } from "./fonts";
import { lineHeights } from "./line_heights";
import { letterSpacings } from "./letter_spacings";
import { spacing } from "./spacing";
import { sizes } from "./sizes";
import { borderRadius } from "./border_radius";
import { zIndices } from "./z_indices";

const breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
};

export const theme = extendTheme({
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  spacing,
  sizes,
  borderRadius,
  zIndices,
  breakpoints,
});

export type TTheme = typeof theme;
