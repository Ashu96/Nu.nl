import { FC } from "react";

import styles from "./app.module.css";
import { NewsProvider } from "./context/NewsContext";
import { HotNews } from "./components/HotNews/HotNews";
import { News } from "./components/News/News";

export const App: FC = () => {
  return (
    <NewsProvider>
      <main className={styles.layout}>
        <News />
        <HotNews />
      </main>
    </NewsProvider>
  );
};
