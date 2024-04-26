import React from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "../css/styles.module.css";
import PageHeader from "../components/PageHeader";
import QuickLink from "../components/QuickLink";

export const ValidatorQuickLinks = [
  {
    title: "Why validate on MultiversX ?",
    content: "Discover the benefits of validating transactions on our network.",
    docName: "validator-journeys/overview",
    icon: "🔒",
  },
  {
    title: "Setup a Validator Node",
    content: "Learn how to set up and run a validator node on MultiversX.",
    docName: "validator-journeys/setup-and-operation",
    icon: "🖥",
  },
  {
    title: "Become a Staking Provider",
    content:
      "Learn how to provide staking services and earn rewards on MultiversX.",
    docName: "validator-journeys/become-a-staking-provider",
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
            Our Technologies
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
