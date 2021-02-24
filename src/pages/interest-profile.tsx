import { useState } from "react";
import { AssetCardStack } from "../components/asset-card-stack";
import { Page } from "../components/page";
import { InterestProfile as InterestProfileInterface } from "../configuration/interest-profile";
import { InterestResult } from "../components/interest-result";

const InterestProfile = () => {
  const [interestProfile, setInterestProfile] = useState<InterestProfileInterface>();

  return (
    <Page title="Build an Interest Profile">
      {!interestProfile ? (
        <AssetCardStack onComplete={(p) => setInterestProfile(p)}/>
        ) : (
        <InterestResult profile={interestProfile}/>
      )}
    </Page>
  );
};

export { InterestProfile };
