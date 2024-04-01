import { FC, useEffect, useState } from "react";

import "./App.css";
import { NewsData } from "./components/types";
import { News } from "./components/News";
import { HotNews } from "./components/HotNews";
import { getNews } from "./utils";

/**
 *
 * TODO:
 * 2. Setup build
 */

export const App: FC = () => {
  const [data, setData] = useState<NewsData[]>([]);

  useEffect(() => {
    const data = getNews();
    setData(data);
  }, []);

  return (
    <main className="main">
      <News data={data} />
      <HotNews data={data} />
    </main>
  );
};