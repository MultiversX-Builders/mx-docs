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
    "Core Concepts": [
      "Core-Concepts/Introduction-to-MultiversX",
      "Core-Concepts/Architecture",
      "Core-Concepts/Ecosystem",
    ],
    "Technology Deep Dive": [
      "Technology-Deep-Dive/Detailed-Architecture",
      "Technology-Deep-Dive/Advanced-Concepts",
      "Technology-Deep-Dive/Adaptive-State-Sharding",
      "Technology-Deep-Dive/ESDT-Token-Standard",
      "Technology-Deep-Dive/Sovereign-Chains",
    ],
    "Why Build on MultiversX": [
      "Why-Build-on-MultiversX/Advantages",
      "Why-Build-on-MultiversX/Being-a-Builder",
      "Why-Build-on-MultiversX/Technical-Fundamentals",
    ],
    "Builder Journeys": {
      "Dapp Builders": [
        "Builder-Journeys/DApp-Creators/Conceptualization-and-Design",
        "Builder-Journeys/DApp-Creators/Development-Setup",
        "Builder-Journeys/DApp-Creators/Building-the-DApp",
        "Builder-Journeys/DApp-Creators/Testing-and-Deployment",
        "Builder-Journeys/DApp-Creators/Optimization-and-Scaling",
      ],

      "Smart Contract Developers": [
        "Builder-Journeys/Smart-Contract-Developers/Introduction-and-Basics",
        "Builder-Journeys/Smart-Contract-Developers/Advanced-Techniques",
        "Builder-Journeys/Smart-Contract-Developers/Security-Practices",
        "Builder-Journeys/Smart-Contract-Developers/Deployment-and-Management",
        "Builder-Journeys/Smart-Contract-Developers/DeFi-Applications",
        "Builder-Journeys/Smart-Contract-Developers/Interoperability-and-Cross-Chain",
      ],
    },
    Validators: [
      "Validators/Validation on MultiversX/Setup-and-Operation",
      "Validators/Economics-and-Incentives",
      "Validators/Security-and-Compliance",
    ],
    "Sovereign Chains": [
      "Sovereign-Chains/Chain-Architecture-Design",
      "Sovereign-Chains/Customization-and-Configuration",
      "Sovereign-Chains/Main-Network-Integration",
      "Sovereign-Chains/Security-Compliance-and-Governance",
      "Sovereign-Chains/Economic-Model-and-Incentives",
      "Sovereign-Chains/Smart-Contract-Development-and-Deployment",
      "Sovereign-Chains/Performance-Optimization-and-Scaling",
    ],
    "Tools and SDKs": [
      "Tools-and-SDKs/SDK",
      "Tools-and-SDKs/CLI",
      "Tools-and-SDKs/Core-Team-Tools/Overview",
      "Tools-and-SDKs/Ecosystem-Resources",
    ],
  },
};

module.exports = sidebars;
