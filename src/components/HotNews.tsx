import { FC } from "react";
import { NewsData } from "./types";

import styles from './hotNews.module.css';
import { getTimeFromTimestamp } from "../utils";

type HotNewsProps = { data: NewsData[] };


export const HotNews: FC<HotNewsProps> = ({ data }) => {
  const sortedByTimestamp = [...data].sort((a, b) => {
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
  });

  return (
    <aside className={styles.hotNews}>
      <h2>Just In</h2>
      <HotNewsList data={sortedByTimestamp} />
    </aside>
  );
};

export const HotNewsList: FC<HotNewsProps> = ({ data }) => {
  return (
    <ul>
      {data.map((news) => {
        return <HotNewsItem key={news.id} data={news} />;
      })}
    </ul>
  );
};

export const HotNewsItem: FC<{ data: NewsData }> = ({ data }) => {
  return (
    <li className={styles.hotNewsItem}>
      <a className={styles.newsLink} href={`/news/${data.id}`}>
        <span className={styles.time}>{getTimeFromTimestamp(data.timestamp)}</span>
        {data.title}
        <IconChevron />
      </a>
    </li>
  );
};



export const IconChevron = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      aria-hidden="true"
      role="img"
    >
      <title lang="nl"></title>
      <g>
        <path
          fill="currentColor"
          d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
        ></path>
      </g>
    </svg>
  );
};
