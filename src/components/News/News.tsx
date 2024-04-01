import { FC } from "react";
import { NewsData } from "../types";

import { useNewsContext } from "../../context/NewsContext";
import styles from "./news.module.css";
import { getTodayDateTime } from "../../utils";
import image1 from "../assets/images/placeholder-2.jpg";
import image2 from "../assets/images/placeholder-3.jpg";
import image3 from "../assets/images/placeholder-4.jpg";

export const News: FC = () => {
  const data = useNewsContext();
  const sortedByPopularity = [...data].sort(
    (a, b) => b.popularity - a.popularity
  );

  return (
    <section className={styles.news}>
      <h2>{getTodayDateTime()} | Latest Dutch news</h2>
      <NewsList list={sortedByPopularity} />
    </section>
  );
};

/**
 * We can extract "NewsList", "NewsBanner" and "NewsItem" component to a separate file as project grows.
 */

type NewsListProp = {
  list: NewsData[];
};

const NewsList: FC<NewsListProp> = ({ list }) => {
  return (
    <ul>
      {list.map((news, index) => {
        if (index === 0) {
          return <NewsBanner key={news.id} newsData={news} />;
        }
        return <NewsItem key={news.id} newsData={news} />;
      })}
    </ul>
  );
};

type NewsItemProps = {
  newsData: NewsData;
};

const NewsBanner: FC<NewsItemProps> = ({ newsData }) => {
  return (
    <li
      className={styles.newsBanner}
      style={{
        backgroundImage: `url(${getImage()})`,
      }}
    >
      <a
        className={styles.newsLink + " " + styles.white}
        href={`/news/${newsData.id}`}
      >
        {newsData.title}
      </a>
    </li>
  );
};

const NewsItem: FC<NewsItemProps> = ({ newsData }) => {
  return (
    <li className={styles.newsItem}>
      <a className={styles.newsLink} href={`/news/${newsData.id}`}>
        {newsData.title}
      </a>
    </li>
  );
};

const getImage = () => {
  const id = Math.round(Math.random() * 10);
  if (id % 3 === 0) {
    return image1;
  } else if (id % 3 === 1) {
    return image2;
  } else {
    return image3;
  }
};
