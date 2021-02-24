import constate from "constate";
import { useState } from "react";

import { SEED_ASSETS } from "../configuration/asset-seed";

export enum Feedback {
  Like = "like",
  Dislike = "dislike",
}

/**
 * A hook that controls the asset stack state
 */
const useAssetStackHook = () => {
  const [activeAssetIndex] = useState(0);

  const assets = [...SEED_ASSETS];

  const activeAsset = assets[activeAssetIndex];

  return {
    activeAsset,
  };
};

const [AssetProvider, useAssets] = constate(useAssetStackHook);

export { AssetProvider, useAssets };
