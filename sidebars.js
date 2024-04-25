/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: {
    "Why Build on MultiversX": [
      "why-build-on-multiversx/quick-overview",
      "why-build-on-multiversx/being-a-builder",
      "why-build-on-multiversx/core-concepts",
    ],
    "Technology Deep Dive": [
      "technology-deep-dive/detailed-architecture",
      "technology-deep-dive/advanced-concepts",
      "technology-deep-dive/sovereign-chains",
    ],
    "Builder Journeys": [
      {
        type: "category",
        label: "Path for DApp Creators",
        items: [
          "builder-journeys/path-for-dapp-creators/conceptualization-and-design",
          "builder-journeys/path-for-dapp-creators/development-setup",
          "builder-journeys/path-for-dapp-creators/building-the-dapp",
          "builder-journeys/path-for-dapp-creators/testing-and-deployment",
          "builder-journeys/path-for-dapp-creators/optimization-and-scaling",
        ],
      },
      {
        type: "category",
        label: "Path for Smart Contract Developers",
        items: [
          "builder-journeys/path-for-smart-contract-developers/learning-rust-and-basics",
          "builder-journeys/path-for-smart-contract-developers/advanced-techniques",
          "builder-journeys/path-for-smart-contract-developers/security-practices",
          "builder-journeys/path-for-smart-contract-developers/deployment-and-management",
          "builder-journeys/path-for-smart-contract-developers/building-defi-applications",
          "builder-journeys/path-for-smart-contract-developers/interoperability-and-cross-chain",
        ],
      },
    ],
    "Validator Journeys": [
      "validator-journeys/setup-and-operation",
      "validator-journeys/economics-and-incentives",
      "validator-journeys/security-and-compliance",
    ],
    "Builders of Sovereign Chains": [
      "builders-of-sovereign-chains/chain-architecture-design",
      "builders-of-sovereign-chains/customization-and-configuration",
      "builders-of-sovereign-chains/integration-with-main-network",
      "builders-of-sovereign-chains/security-and-compliance",
      "builders-of-sovereign-chains/community-and-governance",
      "builders-of-sovereign-chains/economic-model-and-incentives",
      "builders-of-sovereign-chains/developing-and-deploying-smart-contracts",
      "builders-of-sovereign-chains/performance-optimization-and-scaling",
    ],
  },
};

module.exports = sidebars;
