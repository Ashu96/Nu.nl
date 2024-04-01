import { FC } from "react";

import "./App.css";
import { NewsProvider } from "./context/NewsContext";
import { HotNews } from "./components/HotNews/HotNews";
import { News } from "./components/News/News";

export const App: FC = () => {
  return (
    <NewsProvider>
      <main className="main">
        <News />
        <HotNews />
      </main>
    </NewsProvider>
  );
};
