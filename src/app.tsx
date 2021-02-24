import { ThemeProvider } from "styled-components";

import { theme } from "./configuration/theme";
import { AssetProvider } from "./hooks/use-asset-stack";
import { InterestProfile } from "./pages/interest-profile";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AssetProvider>
        <InterestProfile />
      </AssetProvider>
    </ThemeProvider>
  );
};

export { App };
