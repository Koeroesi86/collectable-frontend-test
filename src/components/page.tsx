import { Box } from "./styled/box";
import { Typography } from "./styled/typography";

interface PageProps {
  /**
   * The title of the page
   * Will show at the top of the page as `h1` if its passed down
   */
  title?: string;

  /**
   * The content of the page
   */
  children: React.ReactNode;
}

/**
 * A page layout component to be used at the top
 */
const Page = ({ title, children }: PageProps) => (
  <Box height="100vh" width="100vw" bg="whiteBlue">
    {!!title && (
      <Box py="three">
        <Typography color="charcoal" textStyle="h1" textAlign="center">
          {title}
        </Typography>
      </Box>
    )}

    {children}
  </Box>
);

export { Page };
