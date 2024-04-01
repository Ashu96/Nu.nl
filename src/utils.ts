import { parse } from "papaparse";

import { NewsData } from "./components/types";
import csv from "./assets/newsSource.csv?raw";

export const getNews = (): NewsData[] => {
  const parsed = parse<NewsData>(csv as string, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: (results) => {
      if (results.errors.length) {
        console.error("Errors while parsing CSV file:", results.errors);
      }
    },
  });

  return parsed.data;
};

export const getTimeFromTimestamp = (timestamp: string) => {
  const date = new Date(timestamp);

  return new Intl.DateTimeFormat(navigator.language, {
    hour: "numeric",
    minute: "numeric",
  }).format(date);
};

export const getTodayDateTime = () => {
  const date = new Date();

  return new Intl.DateTimeFormat(navigator.language, {
    day: "numeric",
    month: "long",
    weekday: "long",
    
  }).format(date);
};


