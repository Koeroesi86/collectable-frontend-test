import { Asset } from "../configuration/assets";
import { Box } from "./styled/box";
import { Typography } from "./styled/typography";

interface AssetCardProps {
  asset: Asset;
}

/**
 * A component that renders a single asset card
 */
const AssetCard = ({ asset }: AssetCardProps) => (
  <Box
    width="assetCardWidth"
    height="assetCardHeight"
    bg="coalBlue"
    borderRadius="md"
    boxShadow="card"
  >
    <Box flex={1} p="three">
      <Typography color="whiteBlue" textStyle="body">
        {asset.athleteName}
      </Typography>
    </Box>
  </Box>
);

export { AssetCard };
