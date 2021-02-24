import { useAssets } from "../hooks/use-asset-stack";
import { AssetCard } from "./asset-card";
import { Box } from "./styled/box";

/**
 * A component that handles the card stack
 *
 * It renders the current active asset from `useAssets` hook
 */
const AssetCardStack = () => {
  const { activeAsset } = useAssets();

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <AssetCard asset={activeAsset} />
    </Box>
  );
};

export { AssetCardStack };
