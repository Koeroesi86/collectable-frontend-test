import React from "react";
import { render, screen } from "@testing-library/react";
import { InterestProfile } from "./interest-profile";
import { AssetProvider } from "../hooks/use-asset-stack";
import { SEED_ASSETS } from "../configuration/assets";

test("Renders the athlete name of the first asset", () => {
  render(
    <AssetProvider>
      <InterestProfile />
    </AssetProvider>
  );

  const linkElement = screen.getByText(SEED_ASSETS[0].athleteName);

  expect(linkElement).toBeInTheDocument();
});
