function PageHeader() {
    return (
      <header className={clsx(styles.heroBanner)}>
        <div className="container">
          <h1 className={clsx("hero__title")}>Welcome to the MultiversX Docs!</h1>
          <p className={clsx("hero__subtitle")}>Choose your path you must.</p>
        </div>
      </header>
    );
  }