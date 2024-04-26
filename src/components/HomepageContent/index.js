import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

const TechnoList = [
  {
    title: "Overview",
    content: "Meet the blockchain that offers true internet-scale performance.",
    docName: "why-build-on-multiversx/quick-overview",
    icon: "💡",
  },
  {
    title: "Secure Proof of Stake",
    content:
      "Explore the efficiency and security benefits of SPoS over traditional consensus models.",
    docName: "technology-deep-dive/secure-proof-of-stake",
    icon: "🔒",
  },
  {
    title: "SpaceVM",
    content:
      "Dive into the capabilities and roles of the Space Virtual Machine in smart contract execution.",
    docName: "technology-deep-dive/space-vm",
    icon: "🌌",
  },
  {
    title: "Adaptive State Sharding",
    content:
      "Understand how MultiversX achieves high scalability through state sharding.",
    docName: "technology-deep-dive/adaptive-state-sharding",
    icon: "🧩",
  },
  {
    title: "ESDT Token Standard",
    content:
      "Learn about MultiversX's token standards, including features and advantages of ESDT.",
    docName: "technology-deep-dive/esdt-standard",
    icon: "🪙",
  },
  {
    title: "Sovereign Chains",
    content:
      "Explore how to build and manage custom blockchain solutions within the MultiversX ecosystem.",
    docName: "technology-deep-dive/sovereign-chains",
    icon: "🌐",
  },
];

const BuilderList = [
  {
    title: "Why build on MultiversX ?",
    content:
      "Discover the power of our technology and the benefits of building in our ecosystem.",
    docName: "builder-journeys/tools-and-sdk-overview",
    icon: "🛠️",
  },
  {
    title: "Build a DApp",
    content:
      "Learn how to build your decentralized application step by step on MultiversX.",
    docName: "builder-journeys/build-a-dapp",
    icon: "🌍",
  },
  {
    title: "Build a Smart Contract",
    content: "Follow detailed guides to develop and deploy smart contracts.",
    docName: "builder-journeys/build-a-smart-contract",
    icon: "📜",
  },
  {
    title: "Run a Validator Node",
    content:
      "Validate transactions, secure the network, and earn rewards as a validator.",
    docName: "validator-journeys/setup-and-operation",
    icon: "🖥",
  },
  {
    title: "Become a Staking Provider",
    content: "Become a key part of the network by providing staking services.",
    docName: "validator-journeys/become-a-staking-provider",
    icon: "🔗",
  },
  {
    title: "Integrate a Platform",
    content:
      "Integrate exchanges, wallets, and other platforms with our detailed guides.",
    docName: "integrators/overview",
    icon: "🏛",
  },
  {
    title: "Manage a Wallet",
    content:
      "Learn how to create, manage, and use a MultiversX wallet for your tokens.",
    docName: "wallet/overview",
    icon: "📱",
  },
  {
    title: "Create a Token",
    content:
      "Issue your own tokens on MultiversX with our ESDT token standard.",
    docName: "tokens/overview",
    icon: "🔷",
  },
];

function QuickLink({ docName, title, content, icon }) {
  return (
    <div className={clsx("col col--4 margin-bottom--lg")}>
      <Link className={clsx("card", styles.card)} to={docName}>
        <h3>
          <span className={clsx("margin-right--sm", styles.icon)}>{icon}</span>
          {title}
        </h3>
        <p>{content}</p>
      </Link>
    </div>
  );
}

function HomepageHeader() {
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx("hero__title")}>Welcome to the MultiversX Docs!</h1>
        <p className={clsx("hero__subtitle")}>Choose your path you must.</p>
      </div>
    </header>
  );
}

export default function HomepageContent() {
  return (
    <div>
      <HomepageHeader />
      <section className={styles.features}>
        <div className={clsx("container", styles.container)}>
          <h1
            className={clsx(
              "hero__subtitle",
              "text--center",
              "justify-content--center",
              "font-weight--bold",
              "text-decoration--underline"
            )}
          >
            Our Technologies
          </h1>
          <div className={clsx("row", styles.row)}>
            {TechnoList.map((props, idx) => (
              <QuickLink key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={clsx("container", styles.container)}>
          <h1
            className={clsx(
              "hero__subtitle",
              "text--center",
              "justify-content--center",
              "font-weight--bold",
              "text-decoration--underline"
            )}
          >
            Builder Paths
          </h1>
          <div className={clsx("row", styles.row)}>
            {BuilderList.map((props, idx) => (
              <QuickLink key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
