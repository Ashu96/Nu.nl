import { FC } from "react";
import { NewsData } from "./types";

import styles from "./news.module.css";
import { getTodayDateTime } from "../utils";
import image1 from "../assets/placeholder-2.jpg";
import image2 from "../assets/placeholder-3.jpg";
import image3 from "../assets/placeholder-4.jpg";

type NewsProps = { data: NewsData[] };

export const News: FC<NewsProps> = ({ data }) => {
  const sortedByPopularity = [...data].sort(
    (a, b) => b.popularity - a.popularity
  );

  return (
    <section className={styles.news}>
      <h2>{getTodayDateTime()} | Latest Dutch news</h2>
      <NewsList data={sortedByPopularity} />
    </section>
  );
};

export const NewsList: FC<NewsProps> = ({ data }) => {
  return (
    <ul>
      {data.map((news, index) => {
        if (index === 0) {
          return <NewsBanner key={news.id} data={news} />;
        }
        return <NewsItem key={news.id} data={news} />;
      })}
    </ul>
  );
};

export const NewsBanner: FC<{ data: NewsData }> = ({ data }) => {
  return (
    <li className={styles.newsBanner} style={{ 
        backgroundImage: `url(${getImage()})`,
     }}>
      <a
        className={styles.newsLink + " " + styles.white}
        href={`/news/${data.id}`}
      >
        {data.title}
      </a>
    </li>
  );
};

export const NewsItem: FC<{ data: NewsData }> = ({ data }) => {
  return (
    <li className={styles.newsItem}>
      <a className={styles.newsLink} href={`/news/${data.id}`}>
        {data.title}
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