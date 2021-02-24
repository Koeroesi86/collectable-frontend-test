import {FC} from "react";
import { Asset } from "../configuration/asset-seed";
import { Box } from "./styled/box";
import { Typography } from "./styled/typography";

interface AssetCardProps {
  asset: Asset;
  onLike: () => void;
  onDislike: () => void;
}

/**
 * A component that renders a single asset card
 */
const AssetCard: FC<AssetCardProps> = ({ asset, onLike, onDislike }) => (
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
      <button onClick={onLike}>
        Like
      </button>
      <button onClick={onDislike}>
        Dislike
      </button>
    </Box>
  </Box>
);

export { AssetCard };
