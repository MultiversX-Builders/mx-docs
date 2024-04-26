import React from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "../css/styles.module.css";
import PageHeader from "../components/PageHeader";
import QuickLink from "../components/QuickLink";
const Concepts = [
  {
    title: "Why validate on MultiversX ?",
    content: "Discover the benefits of validating transactions on our network.",
    docName: "Validators/Validation%20on%20MultiversX/Setup-and-Operation",
    icon: "🔒",
  },
  {
    title: "Requirements?",
    content: "What do you need to run a node on MultiversX?",
    docName: "Validators/Validation%20on%20MultiversX/Setup-and-Operation",
    icon: "🔒",
  },
];

const RunNodesQuickLinks = [
  {
    title: "Requirements?",
    content: "What do you need to run a node on MultiversX?",
    docName: "Validators/Validation%20on%20MultiversX/Setup-and-Operation",
    icon: "🔒",
  },
  {
    title: "Setup a Validator Node",
    content: "Learn how to set up and run a validator node on MultiversX.",
    docName: "Validators/Validation%20on%20MultiversX/Setup-and-Operation",
    icon: "🖥",
  },
  {
    title: "Use Multikey",
    content:
      "Learn how to use Multikey to manage numerous validator nodes on MultiversX.",
    docName: "Validators/Validation%20on%20MultiversX/Setup-and-Operation",
    icon: "🔗",
  },
];

const ValidatorQuickLinks = [
  {
    title: "Setup a Validator Node",
    content: "Learn how to set up and run a validator node on MultiversX.",
    docName: "Validators/Validation%20on%20MultiversX/Setup-and-Operation",
    icon: "🖥",
  },
  {
    title: "Become a Staking Provider",
    content:
      "Learn how to provide staking services and earn rewards on MultiversX.",
    docName: "Validators/Validation%20on%20MultiversX/Setup-and-Operation",
    icon: "🔗",
  },
];
function Validate() {
  return (
    <Layout
      title="Validate"
      description="Learn how to run nodes & validate on MultiversX."
    >
      <PageHeader
        title="Validator Journeys"
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
            Concepts
          </h1>
          <div className={clsx("row", styles.row)}>
            {Concepts.map((props, idx) => (
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
            Run Nodes
          </h1>
          <div className={clsx("row", styles.row)}>
            {RunNodesQuickLinks.map((props, idx) => (
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
            Become Staking Provider
          </h1>
          <div className={clsx("row", styles.row)}>
            {ValidatorQuickLinks.map((props, idx) => (
              <QuickLink key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Validate;
