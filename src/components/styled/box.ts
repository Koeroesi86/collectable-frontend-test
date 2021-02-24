import styled from "styled-components";
import {
  space,
  layout,
  color,
  LayoutProps,
  ColorProps,
  SpaceProps,
  FlexboxProps,
  PositionProps,
  BorderRadiusProps,
  flexbox,
  position,
  borderRadius,
  shadow,
  ShadowProps,
  SizeProps,
} from "styled-system";
import { Theme } from "../../configuration/theme";

interface BoxProps
  extends LayoutProps<Theme>,
    ColorProps<Theme>,
    SizeProps<Theme>,
    SpaceProps<Theme>,
    FlexboxProps<Theme>,
    ShadowProps<Theme>,
    PositionProps<Theme>,
    BorderRadiusProps<Theme> {}

/**
 * A styled-system generic container component
 * Find the styled system documentation [here](https://styled-system.com/api#layout)
 *
 * @example
 *
 * <Box height="assetCardHeight" px="three" bg="coalBlue" />
 *
 * // Is the same as
 *
 * <div height={theme.sizes.assetCardHeight} padding={`0 ${theme.space.three}px`} backgroundColor={theme.colors.coalBlue} />
 *
 */
const Box = styled.div<BoxProps>`
  ${color}
  ${layout}
  ${space}
  ${flexbox}
  ${position}
  ${borderRadius}
  ${shadow}
`;

export { Box };
