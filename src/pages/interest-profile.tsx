import { AssetCardStack } from "../components/asset-card-stack";
import { Page } from "../components/page";

const InterestProfile = () => {
  return (
    <Page title="Build an Interest Profile">
      <AssetCardStack
        onComplete={() => console.log('completed')}
      />
    </Page>
  );
};

export { InterestProfile };
