import {
  typography,
  textStyle,
  TypographyProps,
  TextStyleProps,
  color,
  ColorProps,
} from "styled-system";
import styled from "styled-components";
import { Theme } from "../../configuration/theme";

interface Props
  extends TypographyProps<Theme>,
    TextStyleProps<Theme>,
    ColorProps<Theme> {}

/**
 * A typography primitive component using styled system
 * and the theme set in src/configuration/theme.ts.
 *
 * Documentation for styled-system here: https://styled-system.com/api#typography
 *
 * @example <Typography textStyle="h2" color="charcoal" />
 */
const Typography = styled.p<Props>`
  margin: 0;

  ${typography};
  ${color};
  ${textStyle};
`;

export { Typography };
