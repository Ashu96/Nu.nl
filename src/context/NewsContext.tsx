import { FC, ReactElement, createContext, useContext } from "react";
import { NewsData } from "../components/types";
import { getNews } from "../utils";

const NewsContext = createContext<NewsData[]>([]);

export const NewsProvider: FC<{ children: ReactElement }> = ({ children }) => {
  const newsData = getNews();
  return <NewsContext.Provider value={newsData}>{children}</NewsContext.Provider>;
};

export const useNewsContext = () => {
  return useContext(NewsContext);
};
