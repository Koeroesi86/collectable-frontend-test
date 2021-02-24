const colors = {
  white: "#FFFFFF",
  black: "#000000",
  coal: "#1F2227",
  coalBlue: "#333943",
  red: "#E9585B",
  blue: "#3474F4",
  whiteBlue: "#ECF0F8",
  charcoal: "#14161B",
};

const space = { one: 8, two: 16, three: 24 };

const sizes = {
  ...space,
  assetCardHeight: 450,
  assetCardWidth: 350,
};

const radii = {
  sm: 4,
  md: 6,
  lg: 10,
};

const textStyles = {
  h1: {
    fontWeight: 400,
    fontSize: "32px",
    lineHeight: "36px",
  },
  h2: {
    fontWeight: 400,
    fontSize: "24px",
    lineHeight: "28px",
  },
  body: {
    fontSize: "16px",
    lineHeight: "20px",
  },
};

const shadows = {
  card: `1px 2px 3px ${colors.coal}90`,
};

const theme = {
  textStyles,
  colors,
  space,
  radii,
  sizes,
  shadows,
};

export type Theme = typeof theme;

export { theme };
