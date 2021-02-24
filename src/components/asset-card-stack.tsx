import {FC, useEffect} from "react";
import { Feedback, useAssets } from "../hooks/use-asset-stack";
import { AssetCard } from "./asset-card";
import { Box } from "./styled/box";
import { useFeedbackReducer } from "../hooks/feedback-reducer";

interface AssetCardStackProps {
  onComplete: () => void;
}

/**
 * A component that handles the card stack
 *
 * It renders the current active asset from `useAssets` hook
 */
const AssetCardStack: FC<AssetCardStackProps> = ({ onComplete }) => {
  const { activeAsset, next } = useAssets();
  const [feedbackState, dispatchFeedback] = useFeedbackReducer();

  useEffect(next, [feedbackState]);

  useEffect(() => {
    if (!activeAsset) onComplete();
  }, [activeAsset]);

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      {activeAsset && (
        <AssetCard
          asset={activeAsset}
          onLike={() => dispatchFeedback({ feedback: Feedback.Like, tags: activeAsset.tags })}
          onDislike={() => dispatchFeedback({ feedback: Feedback.Dislike, tags: activeAsset.tags })}
        />
      )}
    </Box>
  );
};

export { AssetCardStack };
