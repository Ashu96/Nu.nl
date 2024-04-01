import { FC } from "react";
import { NewsData } from "../types";

import styles from "./hotNews.module.css";
import { getTimeFromTimestamp } from "../../utils";
import { useNewsContext } from "../../context/NewsContext";
import { IconChevron } from "../Icons/IconChevron";

type HotNewsListProps = { list: NewsData[] };

export const HotNews: FC = () => {
  const data = useNewsContext();

  const sortedByTimestamp = [...data].sort((a, b) => {
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
  });

  return (
    <aside className={styles.hotNews}>
      <h2>Just In</h2>
      <HotNewsList list={sortedByTimestamp} />
    </aside>
  );
};

/**
 * We can extract "HotNewsList" and "HotNewsItem" component to a separate file as project grows.
 */

const HotNewsList: FC<HotNewsListProps> = ({ list }) => {
  return (
    <ul>
      {list.map((news) => {
        return <HotNewsItem key={news.id} newsData={news} />;
      })}
    </ul>
  );
};

type HotNewsItemProp = {
  newsData: NewsData;
};

const HotNewsItem: FC<HotNewsItemProp> = ({ newsData }) => {
  return (
    <li className={styles.hotNewsItem}>
      <a className={styles.newsLink} href={`/news/${newsData.id}`}>
        <span className={styles.time}>
          {getTimeFromTimestamp(newsData.timestamp)}
        </span>
        <span className={styles.linkText}>{newsData.title}</span>
        <IconChevron className={styles.icon} />
      </a>
    </li>
  );
};
