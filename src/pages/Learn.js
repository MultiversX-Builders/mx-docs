import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import QuickLink from "../components/QuickLink";
import styles from "../css/styles.module.css";
import PageHeader from "../layout/Header";
import PageSection from "../layout/PageSection";

const adaptiveSharding = [
  {
    title: "Introduction to Adaptive Sharding",
    content:
      "Adaptive sharding is a technique used in the MultiversX network to optimize the processing of transactions and block creation by dynamically adjusting the number of shards based on transaction volume.",
    docName: "Validators/Validation%20on%20MultiversX/Setup-and-Operation",
    icon: "🔄",
  },
  {
    title: "Benefits of Adaptive Sharding",
    content:
      "Ensures scalability and efficiency, optimizes the number of active shards to reduce overhead and resource wastage.",
    docName: "Validators/Validation%20on%20MultiversX/Setup-and-Operation",
    icon: "📈",
  },
];

const esdtStandard = [
  {
    title: "Understanding ESDT",
    content:
      "Elrond Standard Digital Token (ESDT) is a token standard on the MultiversX platform that allows the creation and management of tokens without deploying smart contracts.",
    docName: "Validators/Validation%20on%20MultiversX/Setup-and-Operation",
    icon: "🪙",
  },
];

const vmSpecificities = [
  {
    title: "VM Technology in MultiversX",
    content:
      "MultiversX employs a unique Virtual Machine architecture designed to enhance execution speed and network scalability.",
    docName: "Validators/Validation%20on%20MultiversX/Setup-and-Operation",
    icon: "⚙️",
  },
];

const ecosystemOverview = [
  {
    title: "Overview of the MultiversX Ecosystem",
    content:
      "The ecosystem consists of various tools and services including wallets, explorer, and gateways that support the network's functionality and user engagement.",
    docName: "Validators/Validation%20on%20MultiversX/Setup-and-Operation",
    icon: "🌍",
  },
];

function Learn() {
  return (
    <Layout
      title="Learn"
      description="Explore the MultiversX ecosystem and learn how to build, validate, and participate in the network."
    >
      <PageHeader
        title="Validation Path"
        subtitle="Choose your path you must."
      />
      <PageSection title="Adaptive Sharding">
        {adaptiveSharding.map((props, idx) => (
          <QuickLink key={idx} {...props} />
        ))}
      </PageSection>
    </Layout>
  );
}

export default Learn;
