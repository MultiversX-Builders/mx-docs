import React from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "../css/styles.module.css";
import QuickLink from "../components/QuickLink";
import PageHeader from "../components/PageHeader";

export const BuilderList = [
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

function Builder() {
  return (
    <Layout title="Builder" description="Learn how to build on MultiversX.">
      <PageHeader
        title="Builders Journeys"
        subtitle="Choose your path you must."
      />
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
    </Layout>
  );
}

export default Builder;
